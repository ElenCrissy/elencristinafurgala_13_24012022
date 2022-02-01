import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
    user : {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        isConnected : false
    }
}

export const setEmail = { type : "setEmail" }
export const setPassword = { type : "setPassword" }
export const login = (dispatch) => {

}


const reducer = (state = initialState, action) => {
    if(action.type === "setEmail"){
        return {...state, }
    }
    return state
}

export const store = createStore(reducer, initialState, applyMiddleware(thunk))