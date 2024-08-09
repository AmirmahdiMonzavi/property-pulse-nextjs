import mongoose from "mongoose";

let connected: boolean = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (connected) {
    console.log("Database is connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI!);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
