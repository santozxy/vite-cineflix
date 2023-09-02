import React from "react";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header>
      <h1 className="logo">
        <Link to="/">
          <BiCameraMovie />
          ReactFlix
        </Link>
      </h1>
      <nav >
        <ul className="nav-bar">
          <li>
            <Link to="/">
              Movies
            </Link>
          </li>
          <li>
            <Link to="/series">
              Series
            </Link>
          </li>
        </ul>
      </nav>
      <form>
        <input type="search" name="SeachBar" placeholder="Search movies..." />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </header>
  );
};

export default Header;
