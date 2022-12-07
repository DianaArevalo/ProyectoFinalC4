import mongoose from "mongoose";

const lessonModel = mongoose.Schema({
    "nombreCurso": {type:String, required:true},
    "profesor": {type:String, required:true},
    "area": {type:String, required:true}
})

export default mongoose.model("lessons", lessonModel)