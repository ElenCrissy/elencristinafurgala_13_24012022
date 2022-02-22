import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import LoginForm from "../../components/LoginForm";

const LoginWrapper = styled.main`
  width: 100%;
  background-color: black;
  flex: 1;
  height: 500px;
  display: flex;
  align-items: center;
`

const LoginContent = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  padding: 2rem;
`

const Login = () => {
    return(
        <LoginWrapper>
            <LoginContent>
                <FontAwesomeIcon icon={faUserCircle}/>
                <h1>Sign In</h1>
                <LoginForm/>
            </LoginContent>
        </LoginWrapper>
    )
}

export default Login;