import React, { useState } from "react";
import Searchreasult from "./Searchreasult";

const Search = () => {

    const [img , setimg] = useState("");
       const Inputchange = (e) => {
         const t = e.target.value;
         setimg(t);
       };

return (
<>
<br></br>
<br></br>
<br></br>
<br></br>
    <input type="text" placeholder="Search Anything"
    value={img} onChange={Inputchange}></input>
    <br>

    </br>
    <br>

    </br>
    <br></br>
    <Searchreasult name = {img}></Searchreasult>
</>
)

};

export default Search;