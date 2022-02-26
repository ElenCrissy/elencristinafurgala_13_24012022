import styled from "styled-components";
import iconChat from '../../../assets/icon-chat.png'
import iconMoney from '../../../assets/icon-money.png'
import iconSecurity from '../../../assets/icon-security.png'


const FeatureWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`

const FeatureItem = styled.div`
  flex: 1;
  padding: 2.5rem;
`

const FeatureImage = styled.img`
  width: 100px;
  border: 10px solid #00bc77;
  border-radius: 50%;
  padding: 1rem;
`

const Feature = () => {
    return(
        <FeatureWrapper>
            <FeatureItem>
                <FeatureImage src={iconChat} alt="Chat Icon"/>
                <h3 className="feature-item-title">You are our #1 priority</h3>
                <p>
                    Need to talk to a representative? You can get in touch through our
                    24/7 chat or through a phone call in less than 5 minutes.
                </p>
            </FeatureItem>
            <FeatureItem>
                <FeatureImage src={iconMoney} alt="Money Icon"/>
                <h3 className="feature-item-title">More savings means higher rates</h3>
                <p>
                    The more you save with us, the higher your interest rate will be!
                </p>
            </FeatureItem>
            <FeatureItem>
                <FeatureImage src={iconSecurity} alt="Security Icon"/>
                <h3 className="feature-item-title">Security you can trust</h3>
                <p>
                    We use top of the line encryption to make sure your data and money
                    is always safe.
                </p>
            </FeatureItem>
        </FeatureWrapper>
    )
}

export default Feature;