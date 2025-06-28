import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

export const protect = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized: No token" });
  }

  try {
    const token = authHeader.split(" ")[1];
    const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret_key_here_make_it_long_and_secure';
    const decoded = jwt.verify(token, jwtSecret);

    req.user = await User.findById(decoded.id).select('-password');
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

export const admin = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({ message: "Access denied: Admin privileges required" });
  }
  next();
};
