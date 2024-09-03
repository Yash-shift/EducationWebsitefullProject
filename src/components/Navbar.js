import { Link } from "react-router-dom";
import React, { lazy } from "react";
import logo from "../assests/logo.svg";

const Navbar = () => {
  return (
    <div className="flex">
      <Link to="/">
        <img src={logo} alt="logo" width={160}
         height={32} loading="lazy" />
      </Link>

      <nav>
        <ul className="flex gap-3">
            <li>
                <link to="/">HOME</link>
            </li>
            <li>
                <link to="/">ABOUT</link>
            </li>
            <li>
                <link to="/">CONtACt</link>
            </li>
        </ul>
      </nav>
      <div className="flex ml-5 mr-3 gap-3">
        {
            <link to="/Login">
                <button>LOGIN</button>
            </link>
        }
        {
            <link to="/Signup">
                <button>Signup</button>
            </link>
        }
        {
            <link to="/">
                <button>logOUt</button>
            </link>
        }
        {
            <link to="/Dashboard">
                <button>Dashboard</button>
            </link>
        }
      </div>


    </div>
  );
};

export default Navbar;
