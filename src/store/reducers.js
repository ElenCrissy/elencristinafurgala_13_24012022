import {initialState} from "./index";

export const reducer = (state = initialState, action) => {
    if(action.type === "in progress"){
        return {...state,
            auth : {
                ...state.auth,
                status : action.type
            }
        }
    }
    if(action.type === "success"){
        return {...state,
            auth : {
                ...state.auth,
                status : action.type,
                jwt : action.payload
            }
        }
    }
    if(action.type === "rejected"){
        return {...state,
            auth : {
                ...state.auth,
                status : action.type
            }
        }
    }
    return state
}