import mongoose from "mongoose"

const professionalsModel = mongoose.Schema({
    "Nombre" : {type:String, required:true, minLength:5, maxLeng:30},
    "Edad" : {type:Number, required:true, min:18, max:100},
    "Profesion" : {type:String, required:true},
    "Correo" : {type:String, required:true, unique:true}
})

export default mongoose.model("professionals", professionalsModel)