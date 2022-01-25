import styled from "styled-components";
import argentBankLogo from '../../assets/argentBankLogo.png'
import SignInHeaderButton from "../../components/SignInHeaderButton";

const HeaderWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`

const Logo = styled.a`
  font-weight: bold;
  color: #2c3e50;
  img{
    max-width: 100%;
    width: 200px;
  }
`

const Header = () => {
    return(
        <HeaderWrapper>
            <Logo href={""}>
                <img alt={"Argent Bank Logo"} src={argentBankLogo}/>
            </Logo>
            <SignInHeaderButton/>
        </HeaderWrapper>
    )
}

export default Header;