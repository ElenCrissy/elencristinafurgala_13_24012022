import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {reducer} from "./reducers";

export const initialState = {
    user : {
        firstName: '',
        lastName: '',
        email: '',
        id: '',
        isAuthenticated: false
    },
    auth : {
        // jwt : '',
        jwt: localStorage.getItem("jwt"),
        status : ''
    }
}

export const store = createStore(reducer, initialState, applyMiddleware(thunk))