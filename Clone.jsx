import React, { useState } from "react";
import Header from "./Header";
import Footeer from "./Footeer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const Clone = () => {
    const [additem,setadditem] = useState([]);

const addNote= (note) => {
setadditem((pre) => {
return [
    ...pre,note
];
});

};


return ( 
<>
<Header></Header>
<CreateNote  passNote = {addNote}></CreateNote>

{additem.map((val,index)=>{
    return (<Note
    key={index}
    id = {index}
    title = {val.title}
    content ={val.content}
    /> 
    );
})}
<Footeer></Footeer>
</>
);
};

export default Clone;