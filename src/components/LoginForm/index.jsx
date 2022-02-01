import styled from "styled-components";
import {Link} from "react-router-dom";
import init from "../../services/login";
import {useDispatch} from "react-redux";

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

const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputText((lastValue)=>{
        return{
            ...lastValue,
            [name]:value
        }
    });
}

const submitForm = (e) => {
    e.preventDefault();
    console.log(e.target.value);
}

const LoginForm = () => {
    const dispatch = useDispatch()
    return(
        <LoginFormWrapper method="post" onSubmit={dispatch(login)} novalidate>
            <InputWrapper>
                <label for={"username"}>Username</label>
                <input type={"text"} id={"username"} value={"username"} onChange={handleChange}/>
            </InputWrapper>
            <InputWrapper>
                <label for={"password"} >Password</label>
                <input type={"password"} id={"password"} value={"password"} onChange={handleChange}/>
            </InputWrapper>
            <InputWrapper>
                <input type={"checkbox"} id={"remember me"} value={"rememberMe"}/>
                <label for={"remember me"}>Remember me</label>
            </InputWrapper>
            <Link to="/profile">
                <LoginButton type={"submit"}>Sign In</LoginButton>
            </Link>
        </LoginFormWrapper>
    )
}

export default LoginForm;