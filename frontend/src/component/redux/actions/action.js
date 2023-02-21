import { ADDNEW_NOTE, DELETE_NOTE, GETALL_NOTE, UPDATE_NOTE } from "./actionTypes";
import axios from "axios"

const API_URL = "http://localhost:8080"

const addNewNote = (data) => async (dispatch) => {
    
    try {

        const res = await axios.post(`${API_URL}/notes`, { data })
        dispatch({ type: ADDNEW_NOTE, payload: res.data })

    } catch (err) {
        console.log("error while calling addNewNote",err.message)
    }
}

const getAllNotesItem = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/notes`)
        console.log(res.data)

        dispatch({ type: GETALL_NOTE, payload: res.data })
    } catch (err) {
        console.log("Error while calling getAllNotesItem", err.message)
    }
}

const updateNote = (id, data) => async (dispatch) => {
    console.log(id,data)
    try {
        const res = await axios.put(`${API_URL}/notes/${id}`, { data })
        // console.log("final:",res.data)

        dispatch({ type: UPDATE_NOTE, payload: res.data })
    } catch (err) {
        console.log("Error while calling updateNote", err.message)
    }
}

const deleteNote = (id) => async (dispatch) => {
    // console.log(id)
    try {
        const res = await axios.delete(`${API_URL}/notes/${id}`)
        // console.log("final:",res.data)

        dispatch({ type: DELETE_NOTE, payload: res.data })
    } catch (err) {
        console.log("Error while callingDEleteItem", err.message)
    }
}

export {addNewNote,getAllNotesItem,updateNote,deleteNote}