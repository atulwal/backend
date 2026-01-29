//require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import express from "express"
//import mongoose from "mongoose"
//import {DB_NAME} from "./constants";
import connectDB from "./db/index.js";
import userRoutes from "./routes/user.routes.js"

dotenv.config({
    path: './env'
})

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", userRoutes);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed !!", err);
  });



/* 1st Approach
import express from "express"
const app = express()

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR :", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.log("ERROR :", ERROR);
        throw error
    }
})()

*/