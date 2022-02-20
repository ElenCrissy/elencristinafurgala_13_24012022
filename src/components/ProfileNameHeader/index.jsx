import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

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
    return(
        <ProfileNameHeaderWrapper>
            <FontAwesomeIcon icon={faUserCircle}/>
            <p>{props.userFirstName}</p>
        </ProfileNameHeaderWrapper>
    )
}

ProfileNameHeader.propTypes = {
    userFirstName : PropTypes.string.isRequired,
    userLastName : PropTypes.string.isRequired
}

export default ProfileNameHeader