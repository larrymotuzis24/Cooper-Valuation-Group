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
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img className="w-32 h-20" src={CVGlogo} alt="CVG logo" />
          </div>
          <button
            className="lg:hidden text-blue-600 focus:outline-none"
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
            } lg:flex items-center mt-4 lg:mt-0`}
          >
            <Nav />
          </div>
        </div>
      </header>
      <div className="mt-20 place-self-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Header;