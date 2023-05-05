import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div>
            <h1> Cooper Valuation Group </h1>
            </div>
            <Nav />
            <Outlet />
        </div>
    )
};

export default Header;