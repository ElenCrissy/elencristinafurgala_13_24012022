import {store} from "./index";

export const IN_PROGRESS = { type : "in progress" }

export const SUCCESS = (token) => ({
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
            console.log(token)
            dispatch(SUCCESS(token))
            console.log(store.getState())
            console.log(SUCCESS(token).payload)
        })
        .catch(error =>{
            console.log(error)
            dispatch(REJECTED)
        })
}