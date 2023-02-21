import mongoose from "mongoose"


const NoteSchema=new mongoose.Schema({
    data:{
        type:String,
        required:true
    }
})

const Note=mongoose.model("note",NoteSchema)

export default Note