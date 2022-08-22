import React, { useState } from "react";
import NoteContext from "./noteContext";


const NoteState=()=>{

    const[count,setCount]=useState(0);
    const UpdateText=()=>{
        setCount({
            count
        })
    }

    return(
        <NoteContext.Provider value={state}>
            {props.childern}
        </NoteContext.Provider>
    )
}

export default NoteState