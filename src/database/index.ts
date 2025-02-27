/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import mongoose from "mongoose";

const connectDB = async (url: string) => {
  try {
    const connecting = await mongoose.connect(url);
    console.log(`MongoDb Connected : ${connecting.connection.host}`);
  } catch (error: any) {
    console.error(`Error : ${error.message}`);
  }
};

export default connectDB;
