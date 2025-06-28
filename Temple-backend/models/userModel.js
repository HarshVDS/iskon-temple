// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//   fullName: { type: String, required: true },
//   email: { type: String, unique: true, required: true },
//   mobile: { type: String,unique: true, required: true },
//   password: { type: String, required: true },
// }, { timestamps: true });

// const User = mongoose.model('User', userSchema);
// export default User;


import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  mobile: String,
  address: String,
  password: String,
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  isAdmin: { type: Boolean, default: false },
}, { timestamps: true });

userSchema.pre('save', async function (next) {
  // Only hash the password if it has been modified (and is not already hashed)
  if (!this.isModified('password')) return next();
  
  // Check if password is already hashed (length > 20 typically indicates hashed password)
  if (this.password && this.password.length > 20) return next();
  
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

export default mongoose.model('User', userSchema);