
import PendingDisciple from '../models/PendingDisciple.js';
import Disciple from '../models/disciple.js';

// Get pending data by token
export const getPendingDisciple = async (req, res) => {
  try {
    const { token } = req.params;
    const record = await PendingDisciple.findOne({ part2Token: token });
    if (!record) return res.status(404).json({ message: "Invalid or expired token" });
    res.json(record);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Approve and move to permanent Disciple model
// export const approveDisciple = async (req, res) => {
//   try {
//     const { token } = req.body;
//     const pending = await PendingDisciple.findOne({ part2Token: token });

//     if (!pending) return res.status(404).json({ message: "Token not found" });

//     const approvedDisciple = await Disciple.create({
//       fullName: pending.fullName,
//       dateOfBirth: pending.dateOfBirth,
//       address: pending.address,
//       contactNumber: pending.contactNumber,
//       discipleEmail: pending.discipleEmail,
//       templePresidentEmail: pending.templePresidentEmail,
//       initiationDate: pending.initiationDate,
//       initiationName: pending.initiationName,
//       isApproved: true
//     });

//     await PendingDisciple.findByIdAndDelete(pending._id);

//     res.status(200).json({ message: "Disciple approved and saved", approvedDisciple });
//   } catch (err) {
//     res.status(500).json({ message: "Error approving disciple", error: err.message });
//   }
// };

export const approveDisciple = async (req, res) => {
  try {
    const { token, referrerName, referrerPosition, referrerContact, referrerEmail } = req.body;

    const pending = await PendingDisciple.findOne({ part2Token: token });
    if (!pending) return res.status(404).json({ message: "Token not found" });

    const approvedDisciple = await Disciple.create({
      fullName: pending.fullName,
      dateOfBirth: pending.dateOfBirth,
      address: pending.address,
      contactNumber: pending.contactNumber,
      discipleEmail: pending.discipleEmail,
      templePresidentEmail: pending.templePresidentEmail,
      initiationDate: pending.initiationDate,
      initiationName: pending.initiationName,
      isApproved: true,
      referrer: {
        name: referrerName,
        position: referrerPosition,
        contact: referrerContact,
        email: referrerEmail
      }
    });

    await PendingDisciple.findByIdAndDelete(pending._id);
    res.status(200).json({ message: "Disciple approved and saved", approvedDisciple });

  } catch (err) {
    res.status(500).json({ message: "Error approving disciple", error: err.message });
  }
};

