import styled from "styled-components";
import Hero from "../../layouts/HomePageContent/Hero";
import Feature from "../../layouts/HomePageContent/Feature";
import {useSelector} from "react-redux";

const HomePageWrapper = styled.div`
  width: 100%;
`

const HomePage = () => {
    return (
        <HomePageWrapper>
            <Hero/>
            <Feature/>
        </HomePageWrapper>
    )
}

export default HomePage