import React from "react";
import "./navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="left-nav-conatiner">
        <Link to="/">
          <img
            src="https://assets.ajio.com/static/img/Ajio-Logo.svg"
            alt="ajio-logo"
            height={"40px"}
          />
        </Link>
      </div>
      <div className="right-nav-conatiner">
        <div className="ul-list-container">
          <NavLink to={"/men"} className={"li-list-container"}>
            Men
          </NavLink>
          <NavLink to={"/women"} className={"li-list-container"}>
            Women
          </NavLink>
          <NavLink to={"/kids"} className={"li-list-container"}>
            Kids
          </NavLink>
          <NavLink to={"/home-kitchen"} className={"li-list-container"}>
            Home And Kitchen
          </NavLink>
        </div>
        <input type="text" placeholder="Search AJIO" className="search-input" />
        <Link to="/cart">
          <button
            class="material-symbols-outlined"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            shopping_bag
          </button>
        </Link>
        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>
        {/* <div></div> */}
      </div>
    </div>
  );
};

export default Navbar;
