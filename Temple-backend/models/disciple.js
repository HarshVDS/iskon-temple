import mongoose from 'mongoose';
// import mongoose from 'mongoose';

// const discipleSchema = new mongoose.Schema({
//   fullName: String,
//   dateOfBirth: String,
//   address: String,
//   contactNumber: String,
//   discipleEmail: String,
//   templePresidentEmail: String,
//   initiationDate: String,
//   initiationName: String,
//   isApproved: { type: Boolean, default: false },
// }, { timestamps: true });

// export default mongoose.model('Disciple', discipleSchema);

const discipleSchema = new mongoose.Schema({
  fullName: String,
  dateOfBirth: String,
  address: String,
  contactNumber: String,
  discipleEmail: String,
  templePresidentEmail: String,
  initiationDate: String,
  initiationName: String,
  isApproved: { type: Boolean, default: false },
  referrer: {
    name: String,
    position: String,
    contact: String,
    email: String
  }
}, { timestamps: true });


export default mongoose.model('Disciple', discipleSchema);
