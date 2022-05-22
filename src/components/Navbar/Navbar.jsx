import React from "react";
import { NavLink } from "react-router-dom";
// import {auth, useAuth} from '../Auth/Auth';
export const Navbar = ()=>{
    // const auth = useAuth();
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Products">Products</NavLink>
            <NavLink to="/Profile">Profile</NavLink>
        {
            // !auth.user &&
             (
                <NavLink to='./login'>Login</NavLink>
            )
        }
        </nav>
    )
}