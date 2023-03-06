import React from "react";
import Cart from "../Cart";
import { NavLink } from "react-router-dom";
import "../index.css";
import SearchBox from "../UI/Search";
function Header() {
  return (<div>
    <nav className="navbar">

      <div className="logo"><img src={"assets/logo.png"}></img> <NavLink  to="/">BOOKSPOT</NavLink></div>
      <div className="searchBox-container">
        <SearchBox/>
      </div>

      <ul className="nav-links">
        <div className="menu">
        <button><li><NavLink exact to="/category-1">Suggestions</NavLink></li></button>
          <button><li><NavLink exact to="/category-2">Orders</NavLink></li></button>
          <button><li><NavLink exact to="/Login">Login</NavLink></li></button>
          <Cart />
        </div>
      </ul>
    </nav>

  </div>
  );
}

export default Header;