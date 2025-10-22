import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    `hover:text-red-500 transition font-medium ${
      isActive ? "text-red-500" : "text-white"
    }`;

  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-black text-white sticky top-0 z-50 shadow-md">
      <NavLink to="/" className="text-2xl font-bold tracking-wide">
        TESLA
      </NavLink>

      <ul className="flex space-x-8">
        <li>
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/listing" className={linkClass}>
            Models
          </NavLink>
        </li>
        <li>
          <NavLink to="/order" className={linkClass}>
            Order
          </NavLink>
        </li>
        <li>
          <a
            href="https://shop.tesla.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            Shop
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
