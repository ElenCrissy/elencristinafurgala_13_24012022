import styled from "styled-components";
import Account from "../../components/Account";
import {useSelector} from "react-redux";
import Name from "../../components/Name";
import {useHistory} from "react-router";
import {useEffect} from "react";

const ProfileWrapper = styled.main`
  width: 100%;
  height: 400px;
  background-color: black;
  padding: 20px;
  flex: 1;
`

const ProfileHeader = styled.div`
  color: #fff;
  margin-bottom: 2rem;
  h1{
    margin-bottom: 0;
  }
`

const AccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Profile = () => {
    const history = useHistory()
    const user = useSelector(state => state.user)
    const isAuthenticated = user.isAuthenticated

    useEffect(() => {
        if(!isAuthenticated) {
            history.push(`/`)
        }
    }, [isAuthenticated])

    return(
        <ProfileWrapper>
            <ProfileHeader>
                <h1>Welcome back</h1>
                <Name firstName={user.firstName} lastName={user.lastName}/>
            </ProfileHeader>
            <AccountWrapper>
                <Account/>
            </AccountWrapper>
        </ProfileWrapper>
    )
}

export default Profile;