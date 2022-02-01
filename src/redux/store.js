import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
    // user : {
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     password: '',
    // }
    // auth : {
    //     jwt :
    //     status :
    // }
}


export const authenticateUser = userInput => dispatch => {
    // dispatch in progress
    // appel
    // dispatch success et stock JWT ou error
}

// export const getUser

const reducer = (state = initialState, action) => {
    if(action.type === "setEmail"){
        return {...state, }
    }
    return state
}

export const store = createStore(reducer, initialState, applyMiddleware(thunk))