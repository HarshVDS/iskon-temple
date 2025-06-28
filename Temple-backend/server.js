import express from "express";
import dotenv from "dotenv/config";
import cors from 'cors'
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import discipleRouter from "./routes/discipleRoutes.js";
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import approvalRouter from "./routes/approvalRoutes.js";
import volunteerRouter from './routes/volunteerRoutes.js';
import adminRouter from './routes/adminRoutes.js';

const app = express()
const port = process.env.PORT || 4000

connectDB()

app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3000', 'https://iscon-f.vercel.app'],
    credentials: true,
    
}))
// dotenv.config()

app.use('/api/users', userRouter)
app.use('/api/disciples', discipleRouter)
app.use('/api/approval', approvalRouter)
app.use('/api/volunteers', volunteerRouter);
app.use('/api/admin', adminRouter);

app.get('/', (req, res) => {
    res.send('Hello World')
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

