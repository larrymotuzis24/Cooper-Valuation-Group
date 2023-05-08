import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import CVGlogo from '../CVGlogo.png'

const Header = () => {
    return (
        <div className="flex flex-col">
        <div className="flex items-center justify-around">
            <div className="flex items-center">
                <img className="absolute top-5 left-5 z-10 w-60 h-40" src={CVGlogo} alt="CVG logo"/>
            </div>
            <div className="mt-20">
            <Nav />

            </div>
        </div>
            <div className="mt-20 place-self-center">
                <Outlet />

            </div>
        </div>
    )
};

export default Header;