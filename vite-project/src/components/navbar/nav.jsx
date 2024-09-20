import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import StorefrontIcon from '@mui/icons-material/Storefront';import FiberSmartRecordIcon from "@mui/icons-material/FiberSmartRecord";
import ButtonNav from "../button/buttonNav";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from "@mui/icons-material/Logout";
import "./nav.css";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <span onClick={toggleSidebar} className="sidebar-icon">
          <span className="icon-placeholder">
          <FiberSmartRecordIcon title={isCollapsed ? "open" : "close"} style={{ fontSize: "35px", color: "#fff",corsor:"pointer" }} />
          </span>
        </span>
        {!isCollapsed && <span className="sidebar-title">Nestle</span>}
      </div>

      <div className="sidebar-menu">
        <div className="menu-section">
          <ButtonNav to="/home"
            icon={<SpaceDashboardIcon style={{ fontSize: "27px" }}/>}
            label="Home"
            collapsed={isCollapsed}
            active={location.pathname === "/home"}
          />

          <ButtonNav
            to="/about"
            icon={<ShoppingCartIcon style={{ fontSize: "27px" }}/>}
            label="About"
            collapsed={isCollapsed}
            active={location.pathname === "/about"}
          />
          <ButtonNav
            to="/content"
            icon={<StorefrontIcon style={{ fontSize: "27px" }}/>}
            label="Content"
            collapsed={isCollapsed}
            active={location.pathname === "/content"}
          />
        </div>
      </div>

      {/* Sidebar Footer */}
      <Tooltip arrow placement="top">
        <div className="sidebar-footer">
          <div className="user-avatar" onClick={toggleSidebar}>
            <img
              src="https://img.icons8.com/ios/50/000000/user-male-circle.png"
              alt="User Avatar"
              className="avatar-image"
            />
          </div>
          {!isCollapsed && <span className="user-name">SURESH KANNAN R V</span>}
          {!isCollapsed && (
            <span className="logout-icon">
              <LogoutIcon />
            </span>
          )}
        </div>
      </Tooltip>
    </div>
  );
};

export default Sidebar;
