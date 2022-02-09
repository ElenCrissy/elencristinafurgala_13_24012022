import styled from "styled-components";
import argentBankLogo from '../../assets/argentBankLogo.png'
import SignInHeaderButton from "../../components/SignInHeaderButton";
import SignOutButton from "../../components/SignOutButton";
import {store} from "../../store";
import {useSelector} from "react-redux";

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

const Header = () => {
    const isConnected = store.getState().user.isConnected
    store.subscribe(() => isConnected)
    const isCo = useSelector(state => state)
    console.log(isCo)

    return(
        <HeaderWrapper>
            <Logo href="/">
                <img alt={"Argent Bank Logo"} src={argentBankLogo}/>
            </Logo>
            {isConnected ? <SignOutButton/> : <SignInHeaderButton/>}
        </HeaderWrapper>
    )
}

export default Header;