import React from "react";
import { typeName, typeEmail } from "../action/userActions";
import { useSelector, useDispatch } from "react-redux";

const InfoDisplay = ()=>{

    const {name, email} = useSelector(state => state);

    const dispatch = useDispatch();

    return(
        <div>
            <span>Name:</span>
            <input type="text"
            onChange={(e)=>dispatch(typeName(e.target.value))}></input>
            <br/>
            <span>Email:</span>
            <input type="email"
            onChange={(e)=>dispatch(typeEmail(e.target.value))}></input>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <p>Current values in store:</p>
            <p>Name - {name}</p>
            <p>Email - {email}</p>
        </div>
    )
}

export default InfoDisplay;