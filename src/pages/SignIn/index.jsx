import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import SignInForm from "../../components/SignInForm";

const SignInWrapper = styled.main`
  width: 100%;
  background-color: black;
  flex: 1;
  height: 500px;
  display: flex;
  align-items: center;
`

const SignInContent = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  padding: 2rem;
`

const SignIn = () => {
    return(
        <SignInWrapper>
            <SignInContent>
                <FontAwesomeIcon icon={faUserCircle}/>
                <h1>Sign in</h1>
                <SignInForm/>
            </SignInContent>
        </SignInWrapper>
    )
}

export default SignIn;