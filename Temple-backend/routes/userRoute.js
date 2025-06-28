// import express from 'express';
// import { register, login, getMe } from '../controllers/authController.js';
// import { protect } from '../middleware/auth.js';

// const userRouter = express.Router();

// // Public routes
// userRouter.post('/register', register);
// userRouter.post('/login', login);

// // Protected route
// userRouter.get('/me', protect, getMe);

// export default userRouter;

import express from 'express';
import { register, login, getMe, forgotPassword, resetPassword, changePassword } from '../controllers/authController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);
router.post('/change-password', protect, changePassword);
router.get('/me', protect, getMe);

export default router;
