import styled from "styled-components";
import {useState} from "react";

const LoginFormWrapper = styled.form`
  width: 90%;
`

const InputWrapper = styled.div`
  label{
    font-weight: bold;
    text-align: left;
  }
  input{
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 1rem;
    padding: 5px;
    font-size: 1.2rem;
  }
`

const LoginButton = styled.button`
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  background-color: #00bc77;
  color: #fff;
  cursor: pointer;
  text-decoration: underline;
  border: none;`

// const submitForm = (e) => {
//     e.preventDefault();
//     const inputEmailValue = document.getElementById("username")
//     const inputPasswordValue = document.getElementById("password")
//     useUsers(inputEmailValue, inputPasswordValue);
// }

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const submitForm = (e) => {
        e.preventDefault()
        const userInput = {
            email : email,
            password : password
        }
        dispatch()
    }

    return(
        <LoginFormWrapper method="post" onSubmit={submitForm} novalidate>
            <InputWrapper>
                <label for={"username"}>Username</label>
                <input type={"text"}
                       id={"username"}
                       onChange={(e) => setEmail(e.target.value)}
                       required
                />
            </InputWrapper>
            <InputWrapper>
                <label for={"password"} >Password</label>
                <input type={"password"}
                       id={"password"}
                       onChange={(e) => setPassword(e.target.value)}
                       required
                />
            </InputWrapper>
            <InputWrapper>
                <input type={"checkbox"} id={"remember me"} value={"rememberMe"}/>
                <label for={"remember me"}>Remember me</label>
            </InputWrapper>
            <LoginButton type={"submit"}>Sign In</LoginButton>
        </LoginFormWrapper>
    )
}

export default LoginForm;