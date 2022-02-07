import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {reducer} from "./reducers";

export const initialState = {
    // user : {
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     password: '',
    // }
    auth : {
        jwt : "",
        status : ""
    }
}

export const store = createStore(reducer, initialState, applyMiddleware(thunk))