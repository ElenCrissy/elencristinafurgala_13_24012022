import {createStore} from "redux";

const initialState = {
    users : [{
        firstName: 'Tony',
        lastName: 'Stark',
        email: 'tony@stark.com',
        password: 'password123',
        isConnected : false
    }, {
        firstName: 'Steve',
        lastName: 'Rogers',
        email: 'steve@rogers.com',
        password: 'password456',
        isConnected : false
    }]
}

export const login = { type : "login" }
export const logout = { type : "logout" }


const reducer = (state = initialState, action) => {
    if(action.type === "login"){
        return {...state, score : currentScore+1}
    }
    if(action.type === "logout"){
        return {...state, score : currentScore-1}
    }
    return state
}

export const store = createStore(reducer, initialState)