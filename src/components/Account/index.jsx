import styled from "styled-components";

const AccountBlock = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
    width: 100%;
  }
`

const AccountDetails = styled.div`
  h3{
    margin: 0;
  }
  p:nth-child(2){
    margin: 0;
    font-size: 2.5rem;
    font-weight: bold;
  }
  p:last-child{
    margin: 0;
  }
`

const TransactionButton = styled.div`
    button{
      display: block;
      padding: 8px;
      font-size: 1.1rem;
      font-weight: bold;
      margin-top: 1rem;
      border-color: #00bc77;
      background-color: #00bc77;
      color: #fff;
    }
`

const Account = () => {
    return(
        <AccountBlock>
            <AccountDetails>
                <h3>Argent Bank Checking (x8349)</h3>
                <p>$2,082.79</p>
                <p>Available Balance</p>
            </AccountDetails>
            <TransactionButton >
                <button type={"button"}>View transactions</button>
            </TransactionButton>
        </AccountBlock>
    )
}

export default Account