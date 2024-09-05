// import { Link } from "react-router-dom";
import React, { lazy } from "react";
import logo from "../assests/logo.svg";
import { NavLink } from "react-router-dom";

// import { toast } from 'react-toastify';

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className="flex justify-evenly items-center w-full max-w-[1160] py-2 mx-auto ">

      
      <NavLink to="/">
        <img src={logo} alt="logo" width={80} height={80} loading="lazy" />
      </NavLink>


      

      <nav className="">
        <ul className="flex text-gray-400 font-semibold gap-x-6">
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/">CONTACT</NavLink>
          </li>
        </ul>
      </nav>


      <div className="flex items-center gap-x-4 ">
        {!isLoggedIn && (
          <NavLink to="/Login">
            <button className="bg-slate-700 text-slate-400 py-[8px] px-[12px] rounded-[8px] border border-slate-900">LOGIN</button>
          </NavLink>
        )}
        {!isLoggedIn && (
          <NavLink to="/Signup">
            <button className="bg-slate-700  text-slate-400 py-[8px] px-[12px] rounded-[8px] border border-slate-900">Signup</button>
          </NavLink>
        )}
        {isLoggedIn && (
          <NavLink to="/">
            <button className="bg-slate-700 text-white py-[8px] px-[12px] rounded-[8px] border border-slate-900"
              onClick={() => {
                setIsLoggedIn(false);
                // toast.success("Logged Out Successfully")
              }}
            >
              logOUt
            </button >
          </NavLink>
        )}
        {isLoggedIn && (
          <NavLink to="/Dashboard">
            <button className="bg-slate-700 text-white py-[8px] px-[12px] rounded-[8px] border border-slate-900">Dashboard</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
