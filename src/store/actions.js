import {store} from "./index";
import {useSelector} from "react-redux";

export const IN_PROGRESS = { type : "in progress" }

// action creator (minuscule)
export const success = token => ({
    type : "success",
    payload : token
})

export const REJECTED = { type : "rejected" }

// thunk (minuscule)
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
            dispatch(success(token))
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
            dispatch(login(data.body))
        })
        .catch(error =>{
                console.log(error)
        })
}

export const login = userData => ({
    type : "login",
    payload : userData
})

export const logout = {
    type : "logout"
}

export const sendNewUserName = userInput => dispatch => {
    console.log(userInput)
    dispatch(IN_PROGRESS)

    const url = 'http://localhost:3001/api/v1/user/profile'
    const init = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userInput.token}`,
        },
        body: JSON.stringify({
            firstName: userInput.firstName,
            lastName: userInput.lastName,
        })
    }
    fetch(url, init)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            //dispatch(getNewUserName(data))
        })
        .catch(error =>{
            console.log(error)
        })
}

// export const getNewUserName = () => {
//     const url = 'http://localhost:3001/api/v1/user/profile'
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//             //get name
//             // dispatch(updateUserName(name))
//         })
//         .catch(error =>{
//             console.log(error)
//         })
// }

// export const updateUserName = userData => ({
//     type : "update user name",
//     payload : userData
// })