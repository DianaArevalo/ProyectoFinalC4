import express from "express"
import { createLesson, deleteLesson, readLesson, updateLesson } from "../controllers/lessonController.js"

const lessonRouter = express.Router()

//CRUD
//CREAR: POST
lessonRouter.post("/", (req, res) => {
    createLesson(req, res)
})

//LEER: GET
lessonRouter.get("/:id", (req, res) => {
    readLesson(req, res)
})

//ACTUALIZAR: PUT / PATCH
lessonRouter.patch("/:id", (req, res) => {
    updateLesson(req, res)
})

//ELIMINAR: DELETE
lessonRouter.delete("/", (req, res) => {
    deleteLesson(req, res)
})

export default lessonRouter