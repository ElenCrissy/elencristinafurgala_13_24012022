import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import {useHistory} from "react-router";

const ProfileNameHeaderWrapper = styled.div`
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  margin-right: 15px;
  p{
    margin: 0 0 0 10px;
  }
`

const ProfileNameHeader = (props) => {
    const history = useHistory()
    const handleClick = () => {
        history.push(`/profile/${props.userId}`)
    }

    return(
        <ProfileNameHeaderWrapper onClick={handleClick}>
            <FontAwesomeIcon icon={faUserCircle}/>
            <p>{props.userFirstName}</p>
        </ProfileNameHeaderWrapper>
    )
}

ProfileNameHeader.propTypes = {
    userFirstName : PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired
}

export default ProfileNameHeader