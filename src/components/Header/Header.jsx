import React, { useEffect, useState } from "react";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [search, setSearch] = useState("")
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!search) return
    navigate(`/search?q=${search}`)
    setSearch("");
  }
  return (
    <header>

      <h1 className="logo">
        <Link to="/">
          ReactFlix
          <BiCameraMovie />
        </Link>
      </h1>
      <nav >
        <ul className="nav-bar">
          <li>
            <Link to="/" className="active">
              Movies
            </Link>
          </li>
          <li>
            <Link to="/series">
              Series
            </Link>
          </li>
          <li>
            <Link to="/series">
              Favorites
            </Link>
          </li>
        </ul>
      </nav>
      <form onSubmit={handleSubmit}>
        <input type="search" name="SeachBar" placeholder="Search movies..." 
        onChange={(e) => setSearch(e.target.value)}
        value={search} />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>

    </header>
  );
};

export default Header;
