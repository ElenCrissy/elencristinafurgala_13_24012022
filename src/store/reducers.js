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
        //action.rememberMe
        return {...state,
            user: {
                ...state.user,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                id: action.payload.id,
                isAuthenticated: true
            }
        }
    }
    if(action.type === "logout") {
        localStorage.removeItem('jwt')
        localStorage.removeItem('isRemembered')
        //unpack initialState changer jwt
        return initialState
    }
    if(action.type === "update user name") {
        return {...state,
            user: {
                ...state.user,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
            }
        }
    }
    return state
}