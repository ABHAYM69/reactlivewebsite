import React, { useState } from "react";
import Note from "./Note";
import Clone  from "./Clone";

const CreateNote = (props) => {
const [note,setnote] = useState({
    title:'',
    content:''
});
  

const InputEven = (eve) =>{
     const value =eve.target.value;
     const name =eve.target.name;
    setnote((pre) =>{
        return{
            ...pre,
            [name]:value,
        };
    });
};


const update = () => {
  props.passNote(note);
};




return(
    <>
<div className="main_note">
    <form>
        <input type="text" 
        name="title"
        value={note.title}
        onChange={InputEven}
        placeholder="Tittle"
        autoCapitalize="off"></input>
        <br></br>
        <textarea 
        rows=""  
        column = ""
        name="content"
        value={note.content}
        onChange={InputEven}
        ></textarea>
        <button onClick={update}>
            +
        </button>
    </form>
</div>
    </>
);
};

export default CreateNote;