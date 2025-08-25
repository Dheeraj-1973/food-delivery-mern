import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://foodapp_user:GLfxHQKKuf3yDKJa@cluster0.chqsjei.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log("Database connected");
    } catch (error) {
        console.error("Database connection error:", error);
        // Exit the process with a failure code
        process.exit(1); 
    }
};