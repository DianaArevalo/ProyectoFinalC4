import express from "express";
import { createProfessional, deleteProfessional, readProfessional, updateProfessional } from "../controllers/professionalsControler.js";

const professionalsRouter = express.Router()

professionalsRouter.post("/", (req, res) => {
    createProfessional(req, res)
})

professionalsRouter.get("/", (req, res) => {
    readProfessional(req, res)
})

professionalsRouter.patch("/", (req, res) => {
    updateProfessional(req, res)
})

professionalsRouter.delete("/", (req, res) => {
    deleteProfessional(req, res)
})

export default professionalsRouter
