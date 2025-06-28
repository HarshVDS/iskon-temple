// // controllers/discipleController.js
// import Disciple from '../models/disciple.js';
// import crypto from 'crypto';
// import nodemailer from 'nodemailer';

// export const submitDiscipleForm = async (req, res) => {
//   try {
//     const {
//       fullName,
//       dateOfBirth,
//       address,
//       contactNumber,
//       discipleEmail,
//       templePresidentEmail,
//       initiationDate,
//       initiationName
//     } = req.body;

//     // 1. Generate unique token for Part 2 form
//     const token = crypto.randomBytes(32).toString('hex');

//     // 2. Save to database
//     const newDisciple = await Disciple.create({
//       fullName,
//       dateOfBirth,
//       address,
//       contactNumber,
//       discipleEmail,
//       templePresidentEmail,
//       initiationDate,
//       initiationName,
//       part2Token: token
//     });

//     console.log(newDisciple)
//     // 3. Create Part 2 form link
//     const part2Link = `https://iskon-website-swart.vercel.app/discipleRegistration`;

//     // 4. Send email to temple president
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS
//       }
//     });

//     await transporter.sendMail({
//       from: `"Disciple Registration" <${process.env.MAIL_USER}>`,
//       to: templePresidentEmail,
//       subject: `Action Required: Confirm Disciple Registration for ${fullName}`,
//       html: `
//         <p>Dear Temple President,</p>
//         <p>The disciple <strong>${fullName}</strong> has submitted the registration form.</p>
//         <p>Please complete the confirmation form by clicking the link below:</p>
//         <a href="${part2Link}">${part2Link}</a>
//         <p>Thank you!</p>
//       `
//     });

//     res.status(200).json({ message: "Email sent to temple president", token });

//   } catch (error) {
//     res.status(500).json({ message: "Error processing form", error: error.message });
//   }
// };

import PendingDisciple from '../models/PendingDisciple.js';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

export const submitDiscipleForm = async (req, res) => {
  try {
    const {
      fullName,
      dateOfBirth,
      address,
      contactNumber,
      discipleEmail,
      templePresidentEmail,
      initiationDate,
      initiationName
    } = req.body;

    const token = crypto.randomBytes(32).toString('hex');

    const pendingDisciple = await PendingDisciple.create({
      fullName,
      dateOfBirth,
      address,
      contactNumber,
      discipleEmail,
      templePresidentEmail,
      initiationDate,
      initiationName,
      part2Token: token
    });

const part2Link = `https://iscon-f.vercel.app/Reg?token=${token}`;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    // await transporter.sendMail({
    //   from: `"Disciple Registration" <${process.env.MAIL_USER}>`,
    //   to: templePresidentEmail,
    //   subject: `Confirm Disciple Registration for ${fullName}`,
    //   html: `
    //     <p>The disciple <strong>${fullName}</strong> has submitted the registration form.</p>
    //     <p>Click the link to complete the approval: <a href="${part2Link}">${part2Link}</a></p>
    //   `
    // });

    await transporter.sendMail({
      from: `"Disciple Registration Team" <${process.env.MAIL_USER}>`,
      to: templePresidentEmail,
      subject: `Action Required: Approve Disciple Registration for ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #333;">Hare Krishna!</h2>
          <p style="font-size: 16px;">Respected Temple President,</p>
          
          <p style="font-size: 15px;">
            A disciple named <strong>${fullName}</strong> has submitted their registration form for your review and approval.
          </p>
          
          <p style="font-size: 15px;">
            Please click the button below to review and complete the approval process:
          </p>
          
          <div style="text-align: center; margin: 24px 0;">
            <a href="${part2Link}" style="background-color: #007bff; color: #fff; padding: 12px 20px; border-radius: 5px; text-decoration: none; font-weight: bold;">
              Review Disciple Registration
            </a>
          </div>
    
          <p style="font-size: 14px;">
            If the button above doesn't work, copy and paste the following link into your browser:<br />
            <a href="${part2Link}" style="color: #007bff;">${part2Link}</a>
          </p>
    
          <hr style="margin: 24px 0;" />
    
          <p style="font-size: 13px; color: #666;">
            Thank you for your time and service.<br />
            <strong>ISKCON Disciple Registration Team</strong><br />
            For assistance, contact us at <a href="mailto:${process.env.MAIL_USER}" style="color: #007bff;">${process.env.MAIL_USER}</a>
          </p>
        </div>
      `
    });
    


    res.status(200).json({ message: "Email sent to temple president", token });
  } catch (error) {
    res.status(500).json({ message: "Error processing form", error: error.message });
  }
};