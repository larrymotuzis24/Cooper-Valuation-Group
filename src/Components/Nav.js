import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const linkStyles =
    "block py-2 px-4 lg:px-0 text-blue-600 hover:text-blue-800 font-semibold";

  return (
    <nav>
      <ul className="lg:flex lg:space-x-4">
        <li>
          <Link to="/" className={linkStyles}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={linkStyles}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/services" className={linkStyles}>
            Products & Services
          </Link>
        </li>
        <li>
          <Link to="/clients" className={linkStyles}>
            Clients & Testimonials
          </Link>
        </li>
        <li>
          <Link to="/newsletters" className={linkStyles}>
            Newsletters
          </Link>
        </li>
        <li>
          <Link to="/press" className={linkStyles}>
            Press
          </Link>
        </li>
        <li>
          <Link to="/contact" className={linkStyles}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
