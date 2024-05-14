import { getByTitle } from "@testing-library/react";
import React, { useEffect, useState } from "react";

const Ueffect = () => {

    const [num,setnum] =useState(0);
    useEffect(
        () => {
    document.title = `You clicked me ${ num }`;
        }
    );
    return(
<>
<button onClick={() => {
    setnum(num+1)
}}>
    click me {num}
</button>
</>
    )};

    export default Ueffect;
