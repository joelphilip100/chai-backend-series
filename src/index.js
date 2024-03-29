// require("dotenv").config({ path: "./env" });
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

import express from "express";

dotenv.config({
  path: "./env",
});

connectDB();

// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log(`Error ${error}`);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log("MongoDB database connected");
//       console.log(`Application is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error(`Error: ${error}`);
//     throw error;
//   }
// })();
