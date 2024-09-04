// import { Link } from "react-router-dom";
import React, { lazy } from "react";
import logo from "../assests/logo.svg";
import { NavLink } from "react-router-dom";

// import { toast } from 'react-toastify';

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className="flex justify-evenly ">
      <NavLink to="/">
        <img src={logo} alt="logo" width={80} height={80} loading="lazy" />
      </NavLink>

      <nav>
        <ul className="flex  font-bold gap-3">
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/">CONtACt</NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex ml-5 mr-3  gap-3 ">
        {!isLoggedIn && (
          <NavLink to="/Login">
            <button>LOGIN</button>
          </NavLink>
        )}
        {!isLoggedIn && (
          <NavLink to="/Signup">
            <button>Signup</button>
          </NavLink>
        )}
        {isLoggedIn && (
          <NavLink to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                // toast.success("Logged Out Successfully")
              }}
            >
              logOUt
            </button>
          </NavLink>
        )}
        {isLoggedIn && (
          <NavLink to="/Dashboard">
            <button>Dashboard</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
