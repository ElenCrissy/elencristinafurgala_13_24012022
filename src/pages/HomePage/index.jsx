import styled from "styled-components";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import Hero from "../../layouts/HomePageContent/Hero";
import Feature from "../../layouts/HomePageContent/Feature";

const HomePageWrapper = styled.div`
  width: 100%;
`

const HomePage = () => {
    return (
        <HomePageWrapper>
            <Header/>
            <Hero/>
            <Feature/>
            <Footer/>
        </HomePageWrapper>
    )
}

export default HomePage