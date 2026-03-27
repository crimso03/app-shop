import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import logo from "../../assets/logo.png";
const Navbar = () => {

   const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/apps"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
        >
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/installation"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
        >
          Installation
        </NavLink>
      </li>
    </>
  ); 


    return (
        <div className="navbar bg-base-100 shadow-sm">

      {/* LEFT */}
      <div className="navbar-start">

        
        <div className="dropdown">
           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>

          <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>

        
        <Link to="/" className="flex items-center gap-2 ">
          <img src={logo} alt="logo" className="w-10 h-10 object-cover " />
          <span className="text-xl font-bold">Hero.IO</span>
        </Link>
      </div>

      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>

     
      <div className="navbar-end">
        <a
          href="https://github.com/crimso03"
          target="_blank"
          className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2]"
        ><FontAwesomeIcon icon={faGithub} />
          Contribution
        </a>
      </div>

    </div>
    );
};

export default Navbar;