import styled from "styled-components";
import {Link} from "react-router-dom";

const SignInFormWrapper = styled.form`
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

const SignInButton = styled.button`
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

const SignInForm = () => {
    return(
        <SignInFormWrapper>
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
            <Link to="/user">
                <SignInButton type={"button"}>Sign In</SignInButton>
            </Link>
        </SignInFormWrapper>
    )
}

export default SignInForm;