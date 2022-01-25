import styled from "styled-components";
import Hero from "../../layouts/HomePageContent/Hero";
import Feature from "../../layouts/HomePageContent/Feature";

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