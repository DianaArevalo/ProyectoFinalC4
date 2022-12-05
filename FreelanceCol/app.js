import express from "express"

const app = express();

const port = process.env.PORT || 8081

app.listen(port, ()=> {
    console.log("El servidor se esta ejecutando.");
})

//Midleware
app.use(express.json())
