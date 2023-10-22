import { AiOutlineMenu } from "react-icons/ai";
import {
  BsPlus,
  BsFillHouseDoorFill,
  BsInfoCircle,
  BsMap,
} from "react-icons/bs";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  //   const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    { name: "HomePage", path: "/", icon: <BsFillHouseDoorFill /> },
    { name: "AddItems", path: "/add-items", icon: <BsPlus /> },
    { name: "MapPage", path: "/map", icon: <BsMap /> },
  ];
  return (
    <div className="sidebar_container">
      <div className={`sidebar`}>
        {menuItem.map((item) => (
          <NavLink key={item.name} to={item.path} className="link">
            <div className="icon">{item.icon}</div>
            {<span className="link_text">{item.name}</span>}
          </NavLink>
        ))}
      </div>
      <main className="main_container">{children}</main>
    </div>
  );
};

export default Sidebar;
