import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import notesReducers from "./reducer/notesReducers"

const reducer=combineReducers({
    notes:notesReducers
})

const middleware=[thunk]

const store=createStore(reducer,
    composeWithDevTools(applyMiddleware(...middleware))
    )

    export default store;