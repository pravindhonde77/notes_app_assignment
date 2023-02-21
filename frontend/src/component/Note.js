import React, { useState } from 'react'
import "./Notes.css"
import {AiFillDelete, AiOutlineEdit} from "react-icons/ai"
import { useDispatch } from 'react-redux'
import { deleteNote, updateNote } from './redux/actions/action'

const Note = ({note}) => {
const [text, setText] = useState(note.data)
const [editing, setEditing] = useState(false)
const dispatch=useDispatch()

const onFormSubmit=(e)=>{
  e.preventDefault();
  // console.log(e.target.value)
  setEditing(prevState=>!prevState)


  dispatch(updateNote(note._id,text))
}

  return (
    <div className='data'>
        <span style={{ display: editing ? "none" : "" }}> {note.data}</span>
        
        <form
                onSubmit={onFormSubmit}
                style={{ display: editing ? "inline" : "none" }}

            >
                <input type="text"
                    value={text}
                    className='input-1'
                    onChange={(e) => setText(e.target.value)}
                />
            </form>
           
            <span className="icon"
             >
              <AiOutlineEdit size={25} style={{marginTop:"12px"}} onClick={() => setEditing(prevState => !prevState)}/>
            </span>

            <span  className="icon" onClick={()=>dispatch(deleteNote(note._id))}>
              <AiFillDelete size={25}/>
            </span>
        
    </div>
  )
}

export default Note