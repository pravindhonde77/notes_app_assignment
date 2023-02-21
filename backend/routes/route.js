import express from "express"
import  { getAllNotes,addNote, updateNote, deleteNote }  from "../controller/note-controller.js"


const route=express.Router()

route.post("/notes",addNote)
route.get("/notes",getAllNotes)
route.put("/notes/:id",updateNote)
route.delete("/notes/:id",deleteNote)



export default route