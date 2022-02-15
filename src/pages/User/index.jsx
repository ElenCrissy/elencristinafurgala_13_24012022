import styled from "styled-components";
import Account from "../../components/Account";
import {useSelector} from "react-redux";
import Name from "../../components/Name";

const ProfileWrapper = styled.main`
  width: 100%;
  height: 400px;
  background-color: black;
  padding: 20px;
  flex: 1;
`

//to fix
const ProfileHeader = styled.div`
  color: #fff;
  margin-bottom: 2rem;
  h1{
    margin-bottom: 0;
  }
`

const ProfileName = styled.div`
  font-size: 30px;
  font-weight: bold;
  button{
    margin-top: 20px;
  }
`

const AccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Profile = () => {
    const user = useSelector(state => state.user)
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