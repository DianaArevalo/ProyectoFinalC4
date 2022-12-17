import professionalsModel from "../models/professionalsModel.js"

export async function createProfessional(req, res){

    const profesional = req.body.Profesional

    if (profesional == null){
        res.status(400).json({
            "Error" : "Falta el objeto Profecionales en el cuerpo de la petición"
        })
        return
    }

    let documento

    try {
        documento = await professionalsModel.create(profesional)
    } catch (error){
        res.status(400).json(error.message)
        return
    }
    res.status(201).json(documento)
}


export async function readProfessional(req, res){
    
    const id = req.params.id
    let documento

    try {
        documento = await professionalsModel.findOne({"_id":id})
        
    } catch (error) {
        res.status(400).json(error.message)
        return
    }
    res.status(200).json(documento)
}


export async function updateProfessional(req, res){
    
    const id = req.params.id
    const update = req.body.update
    let documento

    try {
        documento = await professionalsModel.updateOne({"_id":id}, update, {runValidators: true})
        
    } catch (error) {
        res.status(400).json(error.message)
        return
    }

    res.status(200).json(documento)
}


export async function deleteProfessional(req, res){
    
    const id = req.params.id
    let documento

    try {
        documento = await professionalsModel.deleteOne({"_id":id})
        
    } catch (error) {
        res.status(400).json(error.message)
        return
    }

    res.status(200).json(documento)
    
}
