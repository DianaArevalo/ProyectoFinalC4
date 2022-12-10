import express from "express";
import mongoose from "mongoose";
import companyRouter from "./routes/companyRouter.js";

const app = express();

const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log("El servidor se esta ejecutando.");
});

mongoose.connect(
  "mongodb+srv://FreelanceCol:grupo5@freelancecol.pzdp53s.mongodb.net/Freelance-Col?retryWrites=true&w=majority",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Conectado a DB.");
    }
  }
);

//Midleware
app.use(express.json());
app.use("/company", companyRouter);
app.use("/company/all", companyRouter);
