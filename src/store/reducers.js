import {initialState} from "./index";

export const reducer = (state = initialState, action) => {
    if(action.type === "in progress") {
        return {...state,
            auth : {
                ...state.auth,
                status : action.type
            }
        }
    }
    if(action.type === "success") {
        return {...state,
            auth: {
                ...state.auth,
                status: action.type,
                jwt: action.payload
            }
        }
    }
    if(action.type === "rejected") {
        return {...state,
            auth : {
                ...state.auth,
                status : action.type
            }
        }
    }
    if (action.type === "login") {
        console.log(action.payload)
        return {...state,
            user: {
                ...state.user,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                id: action.payload.id,
                isConnected: true
            }
        }
    }
    return state
}