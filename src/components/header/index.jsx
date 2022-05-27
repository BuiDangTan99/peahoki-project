import React from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import "./style.scss";

const Index = () => {
  const location = new useLocation();

  const listMenu = [
    {
      title: "News",
      path: "/",
      key: "news",
    },
    {
      title: "Profile",
      path: "/profile",
      key: "profile",
    },
  ];
  return (
    <div className="header">
      <div className="container-peahoki">
        <ul className="menu">
          {listMenu.map((menu) => (
            <li
              key={menu.key}
              className={`menu__item ${
                menu.path === location.pathname ? "is-active" : ""
              }`}
            >
              <NavLink className={`menu-link`} to={menu.path}>
                {menu.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Index;
