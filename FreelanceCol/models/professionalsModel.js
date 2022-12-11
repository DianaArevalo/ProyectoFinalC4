import mongoose from "mongoose"

const professionalsModel = mongoose.Schema({
    "Nombre" : {type:String, required:true},
    "Edad" : {type:Number, required:true},
    "Profesion" : {type:String, required:true},
    "Correo" : {type:String, required:true}
})

export default mongoose.model("professionals", professionalsModel)