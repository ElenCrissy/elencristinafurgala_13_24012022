import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const SignInHeaderButtonWrapper = styled.div`
  a{
    width: 100%;
    text-decoration: none;
    margin-right: 0.5rem;
    display: flex;
    justify-content: space-between;
  }
  &:hover{
    text-decoration: underline;
  }
`

const SignInHeaderButton = () => {
    return(
        <SignInHeaderButtonWrapper>
            <a href={""}>
                <FontAwesomeIcon icon={faUserCircle}/>
                Sign in
            </a>
        </SignInHeaderButtonWrapper>
    )
}

export default SignInHeaderButton