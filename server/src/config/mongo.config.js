import mongoose from 'mongoose'

export const connectDb = async () => {
    try {
        console.log("MONGO_URI:", process.env.MONGO_URI);
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`✅ Database Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}