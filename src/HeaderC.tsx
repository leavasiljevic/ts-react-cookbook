import React from "react";
import { Link } from "react-router-dom";

export const HeaderC = () => {
  return (
    <nav className="header">
      <ul className="nav ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/recipes-list">Recipes</Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
      </ul>
    </nav>
  );
};
