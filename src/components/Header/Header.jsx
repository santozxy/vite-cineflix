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
          CineFlix
        </Link>
      </h1>
      <form>
        <input type="search" name="SeachBar" placeholder="Busque um filme" />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </header>
  );
};

export default Header;
