import mongoose from "mongoose";

const connectMongoDB = async () => {
  if (typeof window !== "undefined") {
    throw new Error("Mongoose should only run on the server side.");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectMongoDB;
