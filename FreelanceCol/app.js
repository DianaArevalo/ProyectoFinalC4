import express from "express";
import professionalsRouter from "./routes/professionalsRouter.js";

const app = express()

const port = process.env.PORT || 8081

app.listen(port, () => {
    console.log("El servidor se esta ejecutando.")
})

app.use(express.json())
app.use("/professionals", professionalsRouter)