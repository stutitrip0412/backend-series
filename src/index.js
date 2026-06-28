//require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB", error);
  });

/*import express from "express";

const app = express();


(async () => {
    try {
       await mongoose.connect(`$
        {process.env.MONGO_URL}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR:",error);
            throw error
        })

    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
    } catch (error) {
        console.error("ErroR:",error);
        throw err
    }
})()*/
