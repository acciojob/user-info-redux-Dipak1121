import { TYPE_NAME, TYPE_EMAIL } from "./actionTypes";

export function typeName(name){

    return{
        type: TYPE_NAME,
        payload: name
    }
}

export function typeEmail(email){

    return{
        type: TYPE_EMAIL,
        payload: email
    }
}