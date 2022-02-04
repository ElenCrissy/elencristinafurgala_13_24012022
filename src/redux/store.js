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
    const url = 'http://localhost:3001/api/v1/user'
    const init = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        // body: JSON.stringify({
        //     email: email,
        //     password: password,
        // })
    }
    fetch(url, init)
        .then(response => {
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })

    }
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