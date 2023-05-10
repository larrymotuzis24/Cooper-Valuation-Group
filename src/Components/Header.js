import React, { useState } from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import CVGlogo from "../CVGlogo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col">
      <header className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 shadow-md py-4">
        <div className="container mx-auto flex items-center justify-between px-4 lg:px-0">
          <div className="flex items-center">
            <img className="w-48 h-32" src={CVGlogo} alt="CVG logo" />
          </div>
          <button
            className="lg:hidden text-white focus:outline-none hover:text-green-200 transition-colors"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex items-center mt-4 lg:mt-0 text-white`}
          >
            <Nav />
          </div>
        </div>
      </header>
      <div className="mt-8 place-self-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Header;
