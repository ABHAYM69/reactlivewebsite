import React from "react";

const Searchreasult = (p) => {
    const a = `https://pixabay.com/api/?${p.name}`;
return (
<>
    <img src={a} alt="search"></img>
</>
)

};

export default Searchreasult;