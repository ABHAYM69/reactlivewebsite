import React, { useState } from "react";

const Inm = () => {

const [num,setnum] = useState(0);
 
const Inputchange = () => {
   setnum(num +1);
};
const Inputchange1 = () => {
    if(num==0){
        return alert("No more Decrement");
    }
    setnum(num-1);
};

return(
    <>
        <div>
            <div>
                <h1>{num}</h1>
                <button onClick={Inputchange}>+</button>
                <br></br>
                <button onClick={Inputchange1}>-</button>
            </div>
        </div>
    </>
)};

export default Inm ;