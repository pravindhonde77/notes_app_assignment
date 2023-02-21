import React from 'react'
import NoteInputForm from './NoteInputForm'
import "./NoteDetails.css"
import Notes from './Notes'

const NoteDetails = () => {
  return (
    <div className='body'>
        <div className='input1'>
        <NoteInputForm/>
        <Notes/>

        </div>
        
    </div>
  )
}

export default NoteDetails