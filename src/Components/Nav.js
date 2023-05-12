import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products & Services", path: "/services" },
    { name: "Clients & Testimonials", path: "/clients" },
    { name: "Newsletters", path: "/newsletters" },
    { name: "Press", path: "/press" },
  ];

  return (
    <nav className="bg-white rounded-lg p-2 lg:w-7/8 lg:ml-4">
      <ul className="flex flex-col lg:flex-row lg:text-center gap-2 lg:gap-4">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className="text-third text-lg font-medium px-2 py-1 rounded-lg hover:bg-nongreen transition-colors"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
