import express from 'express';
import { getPendingDisciple, approveDisciple } from '../controllers/approvalController.js';

const approvalRouter = express.Router();

approvalRouter.get('/verify/:token', getPendingDisciple);
approvalRouter.post('/approve', approveDisciple);
export default approvalRouter;