import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const SignInHeaderButtonWrapper = styled.div`
  a{
    width: 100%;
    color: black;
    font-weight: bold;
    text-decoration: none;
    margin-right: 0.5rem;
    display: flex;
    justify-content: space-between;
    &:visited{
      color: black;
    }
  }
  &:hover{
    text-decoration: underline;
  }
`

const SignInHeaderButton = () => {
    return(
        <SignInHeaderButtonWrapper>
            <a href="/signin">
                <FontAwesomeIcon icon={faUserCircle}/>
                Sign in
            </a>
        </SignInHeaderButtonWrapper>
    )
}

export default SignInHeaderButton