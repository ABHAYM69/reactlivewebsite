import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return(
        <>
        <NavLink to={"/about"} padding = "120px ,40px">About Us</NavLink>
        <NavLink to={"/contact"} padding = "120px ,40px">Contact Us</NavLink>
        <NavLink to={"/service"} padding = "120px ,40px">Service Us</NavLink>
        <NavLink to={"/user/abhay/mishra"} padding = "120px ,40px">User</NavLink>
        <NavLink to={"/search"} padding = "120px ,40px">Search</NavLink>
            
        </>
    )
};

export default Menu;