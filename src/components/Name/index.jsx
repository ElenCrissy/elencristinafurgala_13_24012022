import styled from "styled-components";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sendNewUserName} from "../../store/actions";
import PropTypes from "prop-types";

const NameWrapper = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: white;
  button{
    margin-top: 20px;
  }
`
const NameForm = styled.form`
  #firstName{
    text-align: end;
  }
  input{
    width: 200px;
    font-size: 30px;
    font-weight: bold;
    color: white;
    background-color: black;
    outline: white;
    ::placeholder{
      color: white;
    }
    :focus{
      outline: none;
    }
  }
`

const Buttons = styled.div`
  display: flex;
  justify-content: center;
`

const Button = styled.button`
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  margin: 0 10px;
`

const Name = (props) => {
    const dispatch = useDispatch()
    const [isEditing, setEdit] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const token = useSelector(state => state.auth.jwt)

    const handleChange = () => {
        if(!isEditing) {
            setEdit(true)
        } else if(isEditing) {
            setEdit(false)
        }
    }

    const handleSave = (e) => {
        e.preventDefault()
        const userInput = {
            firstName : firstName,
            lastName : lastName,
            token : token
        }
        dispatch(sendNewUserName(userInput))
        setEdit(false)
    }

    const handleCancel = () => {
        setEdit(false)
    }

    return(
        <NameWrapper>

            {
                isEditing ?
                    (<NameForm>
                        <input type="text"
                               name="firstName"
                               id="firstName"
                               placeholder={`${props.firstName}`}
                               onChange={(e) => setFirstName(e.target.value)}/>
                        <input type="text"
                            name="lastName"
                            id="lastName"
                            placeholder={`${props.lastName}`}
                           onChange={(e) => setLastName(e.target.value)}
                        />
                        <Buttons>
                            <Button type={"button"} onClick={handleSave} id={"save-button"}>
                                Save
                            </Button>
                            <Button type={"button"} onClick={handleCancel} id={"cancel-button"}>
                                Cancel
                            </Button>
                        </Buttons>
                    </NameForm>) :
                    (<NameWrapper>
                        <div id={"user-name"}>{props.firstName} {props.lastName}</div>
                        <Button type={"button"} onClick={handleChange} id={"edit-button"}>
                            Edit Name
                        </Button>
                    </NameWrapper>)
            }
        </NameWrapper>
    )
}

Name.protoTypes = {
    firstName : PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
}

export default Name