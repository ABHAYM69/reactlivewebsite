import React from "react";

const Footeer = () => {

    const year = new Date().getFullYear();
return(
    <>
<footer>
    <p > copyright @ {year}</p>
</footer> 
    </>
);
};

export default Footeer;