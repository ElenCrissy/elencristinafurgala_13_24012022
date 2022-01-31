import styled from "styled-components";
import {Link} from "react-router-dom";
import init from "../../services/login";

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

const LoginForm = () => {
    return(
        <LoginFormWrapper>
            <InputWrapper>
                <label for={"username"}>Username</label>
                <input type={"text"} id={"username"}/>
            </InputWrapper>
            <InputWrapper>
                <label for={"password"}>Password</label>
                <input type={"password"} id={"password"}/>
            </InputWrapper>
            <InputWrapper>
                <input type={"checkbox"} id={"remember me"}/>
                <label for={"remember me"}>Remember me</label>
            </InputWrapper>
            <Link to="/profile">
                <LoginButton type={"button"} onclick={init()}>Sign In</LoginButton>
            </Link>
        </LoginFormWrapper>
    )
}

export default LoginForm;