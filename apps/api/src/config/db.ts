import mongoose from "mongoose";

export async function connectDB(MONGO_URL: string) : Promise<void> {
    try {
        await mongoose.connect(MONGO_URL)
        console.log('Connected mongoDB')
    } catch (error: unknown) {
        if(error instanceof Error) {
            console.error(`MongoDB connection error: ${error.message}`)
        }
        process.exit(1)
    }
}

