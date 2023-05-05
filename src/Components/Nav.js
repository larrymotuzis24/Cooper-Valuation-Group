import React from "react";
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <div>
            <Link to='/'> Home </Link>
            <Link to='/about'> About Us </Link>
            <Link to='/services'> Products&Services </Link>
            <Link to='/clients'> Clients&Testimonials </Link>
            <Link to='/newsletters'> Newsletters </Link>
            <Link to='/press'> Press </Link>
            <Link to='/contact'> Contact Us </Link>
        </div>
    )
};

export default Nav;