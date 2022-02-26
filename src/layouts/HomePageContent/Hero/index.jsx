import styled from "styled-components";
import bankTree from '../../../assets/bankTree.jpeg'

const HeroWrapper = styled.div`
  width: 100%;
  height: 400px;
  background-position: 0% 33%;
  background-image: url(${bankTree});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`

const HeroContent = styled.section`
  position: absolute;
  top: 50px;
  right: 50px;
  width: 300px;
  margin: 2rem;
  background: white;
  padding: 2rem;
  text-align: left;
  p{
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
  }
  span{
    font-size: 1.2rem;
    margin-bottom: 0;
    display: inline-block;
    padding-top: 20px;
  }
  @media only screen and (max-width: 500px) {
    width: 70%;
    margin: 5%;
    right: 0;
  }
`

const Hero = () => {
    return(
        <HeroWrapper>
            <HeroContent>
                <p>No fees.</p>
                <p>No minimum deposit.</p>
                <p>High interest rates.</p>
                <span>Open a savings account with Argent Bank today!</span>
            </HeroContent>
        </HeroWrapper>
    )
}

export default Hero;