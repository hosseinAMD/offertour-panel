import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => (
    <div>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/profile">Profile</NavLink>
    </div>
);

export default Navbar