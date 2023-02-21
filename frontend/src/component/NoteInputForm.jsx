import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import "./NoteDetails.css"
import { addNewNote } from './redux/actions/action'
const NoteInputForm = () => {
    const [text, setText] = useState("")
    const dispatch=useDispatch()

    const onFormSubmit = (e) => {
     e.preventDefault()
     setText("")
     dispatch(addNewNote(text))
    }

    const onInputChange = (e) => {
        setText(e.target.value)
    }
   

    return (
        <form className='form'
            onSubmit={onFormSubmit}
        >
            <input type="text"
                placeholder='Take a note...'
                className='input'
                value={text}
                onChange={onInputChange}

            />
        </form>
    )
}

export default NoteInputForm