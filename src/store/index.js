import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { IN_PROGRESS, SUCCESS, REJECTED } from "./actions"

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

export const authenticateUser = userInput => dispatch => {
    dispatch(IN_PROGRESS)

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
            dispatch(SUCCESS(token))
            return token
        })
        .catch(error =>{
            console.log(error)
            dispatch(REJECTED)
            console.log(store.getState())
        })
}

// export const getUser

const reducer = (state = initialState, action) => {
    if(action.type === "in progress"){
        return {...state,
            auth : {
                ...state.auth,
                status : IN_PROGRESS.type
            }
        }
    }
    if(action.type === "success"){
        return {...state,
            // auth : {
            //     ...state.auth,
            //     status : "hel",
            //     jwt : "hello"
            // }
        }
    }
    if(action.type === "rejected"){
        return {...state,
            auth : {
                ...state.auth,
                status : REJECTED.type
            }
        }
    }
    return state
}

export const store = createStore(reducer, initialState, applyMiddleware(thunk))