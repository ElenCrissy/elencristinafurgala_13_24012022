import {store} from "./index";

export const IN_PROGRESS = { type : "in progress" }

export const SUCCESS = token => ({
    type : "success",
    payload : token
})
export const REJECTED = { type : "rejected" }

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
            dispatch(SUCCESS(token))
            dispatch(getUser(token))
        })
        .catch(error =>{
            console.log(error)
            dispatch(REJECTED)
        })
}

export const getUser = token => dispatch => {
    const url = 'http://localhost:3001/api/v1/user/login'
    const init = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            token: token,
        })
    }
    fetch(url, init)
        .then(response => {
            return response.json()
        })
        .then(data => {
            const user = data.body
            console.log(user)
            dispatch(addUser(user))
            console.log(store.getState())
        })
        .catch(error =>{
            console.log(error)
        })
}

export const addUser = user => ({
    type : "add user",
    payload: {
        ...user
    }
})
