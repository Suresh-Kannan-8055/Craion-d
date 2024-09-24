import React from "react";
import { Link } from "react-router-dom";
import '../navbar/navbar.css'

const ButtonNav = ({ to, icon, label, collapsed, active }) => (
  <Link
  to={to}
  className={`nav-button ${collapsed ? "collapsed" : ""} ${active ? "active" : ""}`}
>
  <span className="icon">{icon}</span>
  <span className="label">{label}</span>
</Link>

);

export default ButtonNav;
