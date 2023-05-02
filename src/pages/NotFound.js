import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import {FaArrowLeft} from 'react-icons/fa'

const NotFound = () => {
  return (
    <div className="error-page">
      <h1 className="error-page-title">Error 404 page found..!</h1>
      <Link to="/" element={<Home />} className="error-to-home-link">
       <FaArrowLeft/> Home
      </Link>
    </div>
  );
};

export default NotFound;
