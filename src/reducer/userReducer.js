import { TYPE_NAME, TYPE_EMAIL } from "../action/actionTypes";

const initialState = {name:"", email:""};

const userReducer = (state = initialState, action)=>{

    switch(action.type){

        case TYPE_NAME:
            return {...state, name:action.payload}

        case TYPE_EMAIL:
            return {...state, email:action.payload}

        default:
            return state;
    }
}

export default userReducer;