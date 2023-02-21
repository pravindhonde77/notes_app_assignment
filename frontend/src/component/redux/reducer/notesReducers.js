import * as actionTypes from "../actions/actionTypes"

const notesReducers = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADDNEW_NOTE:
            return [action.payload, ...state]

        case actionTypes.GETALL_NOTE:
            return action.payload

        case actionTypes.UPDATE_NOTE:
            return state.map(note => (
                note._id === action.payload._id ? { ...note, data: action.payload.data } : note
            ))

        case actionTypes.DELETE_NOTE:
            return state.filter(note => (
                note._id !== action.payload._id
            ))
        default:
            return state;
    }
}

export default notesReducers