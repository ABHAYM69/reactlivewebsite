import React from "react";
import CreateNote from "./CreateNote";
const Note = (props) => {

    
return(
    <>
    <div className="note">
        <h1> {props.title}</h1>
        <br></br>
        <p>{props.content}</p>
        <button>
            -
        </button>
    </div>
    </>
);
};

export default Note;