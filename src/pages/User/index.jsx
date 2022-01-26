import styled from "styled-components";
import Account from "../../components/Account";

const UserWrapper = styled.main`
  width: 100%;
  height: 400px;
  background-color: black;
  padding: 20px;
  flex: 1;
`

const UserHeader = styled.div`
  color: #fff;
  margin-bottom: 2rem;
  h1{
    margin-bottom: 1rem;
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

const User = () => {
    return(
        <UserWrapper>
            <UserHeader>
                <h1>
                    Welcome back
                    <br/>
                    Cristina
                </h1>
                <EditButton type={"button"}>Edit Name</EditButton>
            </UserHeader>
            <AccountWrapper>
                <Account/>
            </AccountWrapper>
        </UserWrapper>
    )
}

export default User;