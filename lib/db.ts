 import mongoose from "mongoose";



const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error(
        "Please define the MONGODB_URI env variable inside .env"
    )
}

let cached = (global as any).mongoose

if (!cached) {
    cached = (global as any).mongoose = {
        conn: null,
        promise: null,
    };
}

export async function connectDB(){
    // “Are We Already Connected?”
    if (cached.conn) {
        return cached.conn;
    }

// “Is Someone Already Connecting?”
    if (!cached.promise) {
// “Start Connecting”
        cached.promise = mongoose
        .connect(MONGODB_URI,{
            bufferCommands: false,
        })
        .then((mongoose) => mongoose)
    }
    // “Wait Until Connected”
     cached.conn = await cached.promise;
// “Return Connection”
     return cached.conn


}



