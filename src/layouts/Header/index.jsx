import styled from "styled-components";
import argentBankLogo from '../../assets/argentBankLogo.png'
import SignInHeaderButton from "../../components/SignInHeaderButton";
import SignOutButton from "../../components/SignOutButton";
import {useSelector} from "react-redux";
import ProfileNameHeader from "../../components/ProfileNameHeader";

const HeaderWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`

const Logo = styled.a`
  display: inline-block;
  font-weight: bold;
  color: #2c3e50;
  img{
    max-width: 100%;
    width: 200px;
  }
`

const NavWrapper = styled.div`
    display: flex
`

const Header = () => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    const user = useSelector(state => state.user)
    return(
        <HeaderWrapper>
            <Logo href="/">
                <img alt={"Argent Bank Logo"} src={argentBankLogo}/>
            </Logo>
            {isAuthenticated ?
                <NavWrapper>
                    <ProfileNameHeader userFirstName={user.firstName}/>
                    <SignOutButton/>
                </NavWrapper>
                : <SignInHeaderButton/>
            }
        </HeaderWrapper>
    )
}

export default Header;