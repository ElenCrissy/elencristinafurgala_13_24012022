import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
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

export const inProgress = { type : "in progress" }
export const fulfilled = { type : "fulfilled" }
export const rejected = { type : "rejected" }

export const authenticateUser = userInput => dispatch => {
    // dispatch in progress
    dispatch(inProgress)
    // appel
    const url = 'http://localhost:3001/api/v1/user/login'
    const init = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: userInput.email,
            password: userInput.password,
        })
    }
    fetch(url, init)
        .then(response => {
            return response.json()
        })
        .then(data => {
            const token = data.body.token
            console.log(token)
            return token
        })
        .catch(error =>{
            console.log(error)
        })
    // dispatch success et stock JWT ou error
}

// export const getUser

const reducer = (state = initialState, action) => {
    if(action.type === inProgress.type){
        return {...state,
            status : inProgress.type
        }
    }
    if(action.type === fulfilled.type){
        return {...state,
            status : fulfilled.type
            // auth.jwt : ??
        }
    }
    if(action.type === rejected.type){
        return {...state,
            status : rejected.type
        }
    }
    return state
}

export const store = createStore(reducer, initialState, applyMiddleware(thunk))