import React, { useState} from "react";
import ToDOLists from "./ToDoLists";

const Lit = () => {
  const [inputlist,setinputlist] = useState();
  const [Itemes,setitems] = useState([]);

const Inputchange = (eve) => {
  setinputlist(eve.target.value);
};

const listofitems  = ()  => {
  setitems( (olditems ) => {
    return[...olditems,inputlist];
  });
  setinputlist("");
};

const dleteitem = (id) => {
setitems((olditems) =>{
  return olditems .filter((arrElemt,index)=>{
    return index!==id;
  });
});
};
const Onsubmits = (eve) => {
  eve.preventDefault();
} ;

return (
  <>
  <div>
  <div>
    <h1>ToDo List</h1>
    <br></br>
    <input type="text" placeholder="Enert the Itemes" onChange={Inputchange} 
    value={inputlist}
    ></input>
    <button onClick={listofitems}> + </button>

    <ol>
      
      
       { Itemes.map((itemsval,index) =>{
        return <ToDOLists 
        key = {index}
        id = {index}

        text = {itemsval}
        onSelect = {dleteitem}
        ></ToDOLists>
        })}
      
    </ol>
    
    
  </div>
    </div>
  </>

)};


export default Lit;