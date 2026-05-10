import mongoose from "mongoose";

const MONGO_URI =
  process.env.MONGODB_URI!;

if (!MONGO_URI) {
  throw new Error(
    "Please add MONGODB_URI in .env.local"
  );
}

const connectDB = async () => {
  try {
    if (
      mongoose.connection.readyState >= 1
    ) {
      return;
    }

    await mongoose.connect(MONGO_URI);

    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);

    throw new Error(
      "MongoDB Connection Failed"
    );
  }
};

export default connectDB;