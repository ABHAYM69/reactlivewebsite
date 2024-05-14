import React from "react";

const ToDOLists = (pr) => {
    
return( 
<>
<li><button onClick={()=>{
    pr.onSelect(pr.id);
}}>-</button>{pr.text}</li>
</>

)};

export default ToDOLists;