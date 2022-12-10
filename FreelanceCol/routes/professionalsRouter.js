import express from "express";
import { createProfessional, deleteProfessional, readProfessional, updateProfessional } from "../controllers/professionalsControler.js";

const professionalsRouter = express.Router()

professionalsRouter.post("/", (req, res) => {
    createProfessional(res)
})

professionalsRouter.get("/", (req, res) => {
    readProfessional(res)
})

professionalsRouter.patch("/", (req, res) => {
    updateProfessional(res)
})

professionalsRouter.delete("/", (req, res) => {
    deleteProfessional(res)
})

export default professionalsRouter
