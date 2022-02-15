import styled from "styled-components";

const NameFormWrapper = styled.div`

`

const NameForm = () => {
    return(
        <NameFormWrapper>
            <input type="text"
                   name="firstName"
                   id="firstName"
                   placeholder={`${user.firstName}`}/>
            <input type="text"
                   name="lastName"
                   id="lastName"
                   placeholder={`${user.lastName}`}/>
        </NameFormWrapper>
    )
}

export default NameForm