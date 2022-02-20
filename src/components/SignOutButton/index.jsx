import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {logout} from "../../store/actions";

const SignOutButtonWrapper = styled.div`
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

const SignOutButton = () => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(logout)
    }

    return(
        <SignOutButtonWrapper>
            <a onClick={handleClick} href="/">
                <FontAwesomeIcon icon={faArrowRight}/>
                Sign out
            </a>
        </SignOutButtonWrapper>
    )
}


export default SignOutButton