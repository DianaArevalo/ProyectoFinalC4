import lessonModel from "../models/lessonModel.js"

export async function createLesson(req, res){
    const lesion = req.body.lesion
    let documento

    try {
        documento = await lessonModel.create(lesion)
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(201).json(documento)
}

export async function readLesson(req, res){
    
    const id = req.params.id

    let documento

    try {
        documento = await lessonModel.findOne({"_id":id})
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(200).json(documento)
}

//ACTUALIZAR
export async function updateLesson(req, res){
    const id = req.params.id
    const updates = req.body.updates

    let documento = null

    try {
        documento = await lessonModel.findOneAndUpdate({"_id":id},updates)  //updateone
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(200).json(documento)
}

//DELETE
export async function deleteLesson(req, res){
    //IMPLEMENTACION AQUI
    const id = req.body.id

    let documento = null

    try {
        documento = await lessonModel.deleteOne({"_id":id})
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(200).json(documento)
}
