import styled from "styled-components";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import Hero from "../../layouts/HomePageContent/Hero";

const HomePageWrapper = styled.div`
  width: 100%;
`

const HomePage = () => {
    return (
        <HomePageWrapper>
            <Header/>
            <Hero/>
            <Footer/>
        </HomePageWrapper>
    )
}

export default HomePage