import mongoose from "mongoose";
// import dotenv from "dotenv/config";
const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017";
        await mongoose.connect(`${mongoURI}/IskconData`)   
        console.log('MongoDB connected')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default connectDB