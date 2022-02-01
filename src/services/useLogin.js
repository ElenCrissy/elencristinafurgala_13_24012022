import {useEffect, useState} from "react";

const useLogin = (email, password) => {
    const [userEmail, setUserEmail] = useState(email)
    const [userPassword, setUserPassword] = useState(password)
    const [error, setError] = useState(false)

    useEffect( () => {
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

    }, [email, password])

    return {userEmail, userPassword, error}
}

export default useLogin



