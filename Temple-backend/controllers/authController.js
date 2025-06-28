// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import User from '../models/userModel.js';

// const generateToken = (user) => {
//   return jwt.sign(
//     { id: user._id, email: user.email },
//     process.env.JWT_SECRET,
//     { expiresIn: '7d' }
//   );
// };

// // REGISTER
// export const register = async (req, res) => {
//   try {
//     const { fullName, email, mobile, password } = req.body;

//     // Check for existing user by email or mobile
//     const existingUser = await User.findOne({
//       $or: [{ email }, { mobile }]
//     });
//     if (existingUser) {
//       return res.status(400).json({ message: "Email or mobile already registered" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await User.create({
//       fullName,
//       email,
//       mobile,
//       password: hashedPassword
//     });

//     const token = generateToken(user);

//     res.status(201).json({
//       token,
//       user: {
//         id: user._id,
//         fullName: user.fullName,
//         email: user.email,
//         mobile: user.mobile
//       }
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Registration failed", error });
//   }
// };

// // LOGIN (by email OR mobile)
// export const login = async (req, res) => {
//   try {
//     const { identifier, password } = req.body;

//     // Find user by email or mobile
//     const user = await User.findOne({
//       $or: [{ email: identifier }, { mobile: identifier }]
//     });

//     if (!user) {
//       return res.status(401).json({ message: "User not found" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid password" });
//     }

//     const token = generateToken(user);

//     res.json({
//       token,
//       user: {
//         id: user._id,
//         fullName: user.fullName,
//         email: user.email,
//         mobile: user.mobile
//       }
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Login failed", error });
//   }
// };

// // GET LOGGED-IN USER DETAILS
// export const getMe = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select('-password');
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to fetch user info", error });
//   }
// };

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import User from '../models/userModel.js';
import nodemailer from 'nodemailer';

// JWT Token Generator
const generateToken = (user) => {
  const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret_key_here_make_it_long_and_secure';
  return jwt.sign({ id: user._id, email: user.email }, jwtSecret, {
    expiresIn: '7d',
  });
};

// REGISTER
export const register = async (req, res) => {
  try {
    const { fullName, email, mobile, password } = req.body;

    const existingUser = await User.findOne({ $or: [{ email }, { mobile }] });
    if (existingUser) return res.status(400).json({ message: "Email or mobile already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ fullName, email, mobile, password: hashedPassword });

    const token = generateToken(user);
    res.status(201).json({ token, user: { id: user._id, fullName, email, mobile } });
  } catch (err) {
    res.status(500).json({ message: "Registration failed", error: err.message });
  }
};

// LOGIN
export const login = async (req, res) => {
  try {
    const { identifier, password } = req.body;
    const user = await User.findOne({ $or: [{ email: identifier }, { mobile: identifier }] });
    if (!user) return res.status(401).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid password" });

    const token = generateToken(user);
    res.json({ 
      token, 
      user: { 
        id: user._id, 
        fullName: user.fullName, 
        email: user.email, 
        mobile: user.mobile,
        isAdmin: user.isAdmin 
      } 
    });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};

// GET CURRENT USER
export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch user", error: err.message });
  }
};

// SEND RESET LINK
export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(404).json({ message: "Email not found" });

  const token = crypto.randomBytes(32).toString('hex');
  user.resetPasswordToken = token;
  user.resetPasswordExpires = Date.now() + 3600000; // 1 hr
  await user.save();

  const resetLink = `https://iskon-temple.vercel.app/reset-password/${token}`;

  // Check if email credentials are configured
  if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
    console.log('Email credentials not configured. Reset link:', resetLink);
    return res.json({ 
      message: "Password reset email sent (development mode)", 
      resetLink: resetLink 
    });
  }

  const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"ISKCON Support" <${process.env.MAIL_USER}>`,
      to: user.email,
      subject: "Reset Your ISKCON Account Password",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px; background-color: #f9f9f9;">
          <h2 style="color: #333;">Hello ${user.fullName || 'Devotee'},</h2>
          <p>You requested a password reset for your ISKCON account associated with the email: <strong>${user.email}</strong>.</p>
          <p>To reset your password, click the button below:</p>
          <p style="text-align: center; margin: 20px 0;">
            <a href="${resetLink}" style="background-color: #007bff; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px;">Reset Password</a>
          </p>
          <p>If the button doesn't work, copy and paste the following URL into your browser:</p>
          <p><a href="${resetLink}" style="color: #007bff;">${resetLink}</a></p>
          <hr style="margin: 20px 0;" />
          <p style="font-size: 14px; color: #888;">
            This link is valid for the next 1 hour. If you didn't request this, you can safely ignore this email.<br />
            Best regards,<br />
            ISKCON Team
          </p>
        </div>
      `,
    });

    res.json({ message: "Password reset email sent" });
  } catch (error) {
    console.error('Email sending failed:', error);
    res.json({ 
      message: "Password reset email sent (development mode)", 
      resetLink: resetLink 
    });
  }
};

// RESET PASSWORD
export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  const user = await User.findOne({
    resetPasswordToken: token,
    resetPasswordExpires: { $gt: Date.now() }
  });

  if (!user) return res.status(400).json({ message: "Invalid or expired token" });

  user.password = password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;
  await user.save();

  res.json({ message: "Password reset successful" });
};

// CHANGE PASSWORD
export const changePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const user = await User.findById(req.user.id);

  const isMatch = await bcrypt.compare(currentPassword, user.password);
  if (!isMatch) return res.status(400).json({ message: "Current password is incorrect" });

  user.password = newPassword;
  await user.save();

  res.json({ message: "Password changed successfully" });
};
