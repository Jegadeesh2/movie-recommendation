import React from "react";
import { NavLink,Link } from "react-router-dom";
import{HiFire,HiSearch} from "react-icons/hi"

const Navbar = () => {
  return <div className="navbar">
    <div className="nav-links">
    <Link to="/"><h1 className="app-logo">J MovieFinder</h1></Link>
    <NavLink to="/" className="page-links {({ isActive }) => (isActive ? 'active' : 'inactive')}"><HiFire className="nav-icons"/> Trending</NavLink>
    <NavLink to="/search" className="page-links {({ isActive }) => (isActive ? 'active' : 'inactive')}"><HiSearch className="nav-icons"/> Search</NavLink>
    </div>
  </div>;
};

export default Navbar;
