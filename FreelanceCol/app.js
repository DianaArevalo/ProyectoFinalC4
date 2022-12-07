import express from "express"
import mongoose from "mongoose";
import lessonRouter from "./routes/lessonRouter.js";

const app = express();

const port = process.env.PORT || 8081

app.listen(port, ()=> {
    console.log("El servidor se esta ejecutando.");
})

//Midleware
app.use(express.json())
app.use("/lesson", lessonRouter)