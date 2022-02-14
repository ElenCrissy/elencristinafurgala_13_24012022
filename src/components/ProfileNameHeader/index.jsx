import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {useSelector} from "react-redux";

const ProfileNameHeaderWrapper = styled.div`
  
`

const ProfileNameHeader = () => {
    const userInfos = useSelector(state => state.user)
    console.log(userInfos)
    // fix link
    return(
        <ProfileNameHeaderWrapper>
            <a href="/">
                <FontAwesomeIcon icon={faUserCircle}/>
                {userInfos.firstName}
            </a>
        </ProfileNameHeaderWrapper>
    )
}

export default ProfileNameHeader