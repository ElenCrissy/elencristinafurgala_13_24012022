import {store} from "./index";

export const IN_PROGRESS = { type : "in progress" }

// action creator (minuscule)
export const SUCCESS = token => ({
    type : "success",
    payload : token
})
export const REJECTED = { type : "rejected" }

// thunk
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
        .then(response => response.json())
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
    const url = 'http://localhost:3001/api/v1/user/profile'
    const init = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            "token": token,
        })
    }
    fetch(url, init)
        .then(response => response.json())
        .then(data => {
            dispatch(LOGIN(data.body))
        });
}

export const LOGIN = userData => ({
    type : "login",
    payload : userData
})

export const LOGOUT = {
    type : "logout"
}