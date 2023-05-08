import React from "react";
import { Link } from 'react-router-dom';


const Nav = () => {
    const properties = "block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:font-bold mr-4"
    return (
        <div className="border-b border-black">
            <Link to='/' className={properties}> Home </Link>
            <Link to='/about' className={properties}> About Us </Link>
            <Link to='/services' className={properties}> Products&Services </Link>
            <Link to='/clients' className={properties}> Clients&Testimonials </Link>
            <Link to='/newsletters' className={properties}> Newsletters </Link>
            <Link to='/press' className={properties}> Press </Link>
            <Link to='/contact' className={properties}> Contact Us </Link>
        </div>
    )
};

export default Nav;