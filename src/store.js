import {createStore} from "redux";

const initialState = 'hi'

export const login = { type : "login" }
export const logout = { type : "logout" }


const reducer = (state = initialState, action) => {
    const currentScore = state.score
    if(action.type === "add"){
        return {...state, score : currentScore+1}
    }
    if(action.type === "remove" && state.score > 0){
        return {...state, score : currentScore-1}
    }
    if(action.type === "setScore") {
        return {...state, score : action.score}
    }
    return state
}

export const store = createStore(reducer, initialState)