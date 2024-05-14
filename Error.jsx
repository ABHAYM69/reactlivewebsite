import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
return (
<>
    <h1>404,this page is not exit</h1>
    <NavLink to={"/about"} padding = "120px ,40px">Go Back</NavLink>
</>
)

};

export default Error;