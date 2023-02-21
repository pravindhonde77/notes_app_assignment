import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllNotesItem } from './redux/actions/action'
import Note from './Note'
import "./Notes.css"

const Notes = () => {

    const dispatch=useDispatch()
    const notes=useSelector(state=>state.notes)
    console.log(notes)

    useEffect(() => {
      dispatch(getAllNotesItem()) 
    }, [])
  return (
    <div className='grid-data'>

      {
        notes.map(note=>(
          <Note key={note._id}
          note={note}
          />
        ))
      }
    </div>
  )
}

export default Notes