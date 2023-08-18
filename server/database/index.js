import mongoose from "mongoose";

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Connected to the database...");
  } catch (error) {
    console.log(`Error connecting to the database: ${error.message}`);
  }
};

export default connection;
