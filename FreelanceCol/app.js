import express from "express";
import mongoose from "mongoose";
import professionalsRouter from "./routes/professionalsRouter.js";

const app = express()

const port = process.env.PORT || 8081

app.listen(port, () => {
    console.log("El servidor se esta ejecutando.")
})

mongoose.connect("mongodb+srv://FreelanceCol:grupo5@freelancecol.pzdp53s.mongodb.net/Freelance-Col?retryWrites=true&w=majority", (err)=> {
    if (err){
        console.log(err)
    } else{
        console.log("La base de datos se encuentra conectada.")
    }
})

app.use(express.json())
app.use("/professionals", professionalsRouter)