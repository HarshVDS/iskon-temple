import mongoose from 'mongoose';

const volunteerSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  mobile: String,
  address: String,
  country: String,
  nearestCenter: String,
  availability: String,
  interestAreas: String,
  experience: String,
  reason: String,
  skills: String,
  agreed: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model('Volunteer', volunteerSchema);
