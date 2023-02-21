import Note from "../model/Note.js"


const addNote = async (req, res) => {
    try {
        const newNote = await Note.create({
            data: req.body.data,
            createdAt: Date.now()
        })
        await newNote.save()
        return res.status(200).json(newNote)

    } catch (err) {
        return res.status(500).json(err.message)

    }

}


const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find({}).sort({ "createdAt": -1 })
        return res.status(200).json(notes)

    } catch (err) {
        return res.status(500).json(err.message)

    }

}



const updateNote = async (req, res) => {
    try {
     
      await Note.findOneAndUpdate(
        {_id:req.params.id},
        {data:req.body.data}
      )

      const note=await Note.findById(req.params.id)
        return res.status(200).json(note)

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

const deleteNote = async (req, res) => {
    try {
      const note=await Note.findByIdAndDelete(req.params.id)
        return res.status(200).json(note)

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

export { addNote, getAllNotes,updateNote ,deleteNote}