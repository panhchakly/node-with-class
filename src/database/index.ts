import mongoose, { connect } from "mongoose";
import { MONGO_URI } from '../configuration'

export const connectDB = async () => {
    mongoose.set("strictQuery", true);
    try {
        const connection = await connect(MONGO_URI as string);
        console.log(`MongoDB connected`);
    } catch (error : any) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}