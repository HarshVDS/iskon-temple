
// import mongoose from 'mongoose';

// const pendingDiscipleSchema = new mongoose.Schema({
//   fullName: String,
//   dateOfBirth: String,
//   address: String,
//   contactNumber: String,
//   discipleEmail: String,
//   templePresidentEmail: String,
//   initiationDate: String,
//   initiationName: String,
//   part2Token: String,
//   isApproved: { type: Boolean, default: false },
// }, { timestamps: true });

// export default mongoose.model('PendingDisciple', pendingDiscipleSchema);


// ===== models/pendingDisciple.js =====
import mongoose from "mongoose";

const pendingDiscipleSchema = new mongoose.Schema({
  fullName: String,
  dateOfBirth: String,
  address: String,
  contactNumber: String,
  discipleEmail: String,
  templePresidentEmail: String,
  initiationDate: String,
  initiationName: String,
  part2Token: String,
  isApproved: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model("PendingDisciple", pendingDiscipleSchema);
