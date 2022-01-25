import styled from "styled-components";

const UserWrapper = styled.main`
  width: 100%;
  height: 400px;
  background-color: black;
  flex: 1;
`

const UserHeader = styled.div`
  color: #fff;
  margin-bottom: 2rem;
`

const EditButton = styled.button`
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
            {/*<TransactionWrapper>*/}
            {/*    <Transaction/>*/}
            {/*</TransactionWrapper>*/}
        </UserWrapper>
    )
}

export default User;