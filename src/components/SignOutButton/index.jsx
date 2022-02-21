import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../store/actions";
import {useHistory} from "react-router";
import {useEffect} from "react";

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

const SignOutButton = ({isAuthenticated}) => {
    const dispatch = useDispatch()
    let history = useHistory()
    // const isAuthenticated = useSelector(state => state)

    console.log(isAuthenticated)

    useEffect(() => {
        if(!isAuthenticated) {
            history.goBack()
        }
    }, [isAuthenticated])

    const handleClick = () => {
        dispatch(logout)
        localStorage.clear()
    }

    return(
        <SignOutButtonWrapper>
            <a onClick={() => handleClick()}>
                <FontAwesomeIcon icon={faArrowRight}/>
                Sign out
            </a>
        </SignOutButtonWrapper>
    )
}


export default SignOutButton