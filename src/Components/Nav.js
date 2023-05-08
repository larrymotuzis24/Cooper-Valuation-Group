import React from "react";
import { Link } from 'react-router-dom';


const Nav = () => {
    const linkStyles = "block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:font-bold mr-4";
    return (
        <div className="border-b border-black">
            <Link to='/' className={linkStyles}> Home </Link>
            <Link to='/about' className={linkStyles}> About Us </Link>
            <Link to='/services' className={linkStyles}> Products&Services </Link>
            <Link to='/clients' className={linkStyles}> Clients&Testimonials </Link>
            <Link to='/newsletters' className={linkStyles}> Newsletters </Link>
            <Link to='/press' className={linkStyles}> Press </Link>
            <Link to='/contact' className={linkStyles}> Contact Us </Link>
        </div>
    )
};

export default Nav;