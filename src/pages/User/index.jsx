import styled from "styled-components";
import Account from "../../components/Account";
import {useSelector} from "react-redux";
import {useState} from "react";

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
    //input{
    //  width: 200px;
    //  font-size: 30px;
    //  font-weight: bold;
    //  color: white;
    //  background-color: black;
    //  border: none;
    //  #firstName{
    //    text-align: right;
    //  }
    //  #lastName{
    //    text-align: left;
    //  }
    //  ::placeholder{
    //    color: white;
    //  }
    //  :focus{
    //    outline: none;
    //  }
    //}
  }
`

const ProfileName = styled.div`
  font-size: 30px;
  font-weight: bold;
  button{
    margin-top: 20px;
  }
`

const EditButton = styled.button`
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
`

const AccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Profile = () => {
    const user = useSelector(state => state.user)
    const [isEditing, setEdit] = useState(false)

    const handleChange = (e) => {
        e.preventDefault()
        setEdit(true)
        if(isEditing){

        }
    }

    return(
        <ProfileWrapper>
            <ProfileHeader>
                <h1>Welcome back</h1>
                <ProfileName>
                    <div id={"user-name"}>{user.firstName} {user.lastName}</div>
                    <EditButton type={"button"}
                                onClick={handleChange}
                                id={"edit-button"}>
                        Edit Name
                    </EditButton>
                </ProfileName>
            </ProfileHeader>
            <AccountWrapper>
                <Account/>
            </AccountWrapper>
        </ProfileWrapper>
    )
}

export default Profile;