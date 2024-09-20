import React from "react";
import { Link } from "react-router-dom";

const ButtonNav = ({ to, icon, label, collapsed, active }) => (
  <Link
    to={to}
    className={`nav-button ${active ? "active" : ""}`}
  >
    <span className="icon">{icon}</span> {/* Replaced with text or emoji */}
    {!collapsed && <span className="label">{label}</span>}
  </Link>
);

export default ButtonNav;
