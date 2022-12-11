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


export function readProfessional(req, res){
    res.sendStatus(200)
}

export function updateProfessional(req, res){
    res.sendStatus(200)
}

export function deleteProfessional(req, res){
    res.sendStatus(200)
}
