import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Data Structures</NavLink>
      <ul>
        <NavLink to="/array">Array</NavLink>
        <NavLink to="/linked-list">Linked List</NavLink>
        <NavLink to="/queue">Queue</NavLink>
        <NavLink to="/stack">Stack</NavLink>
        <NavLink to="/hash-table">Hash Table</NavLink>
        <NavLink to="/graph">Graph</NavLink>
        <NavLink to="/tree">Tree</NavLink>
        <NavLink to="/heap">Heap</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
