import React from "react";

import { NavLink } from "react-router-dom";

const activeStyle: React.CSSProperties = {
  fontWeight: "bold",
};

const AppHeader = (): JSX.Element => {
  return (
    <nav className="AppHeader shadow-md">
      <div className="max-w-6xl mx-auto p-2 flex space-x-8 items-end">
        <NavLink to="/">
          <img
            src="images/vektor-logo.svg"
            alt="vektorprogrammet logo"
            className="h-20"
          />
        </NavLink>
        <div className="flex-grow" />
        <NavLink
          className="header-link"
          to="/assistenter"
          activeStyle={activeStyle}
        >
          Assistenter
        </NavLink>
        <NavLink
          className="header-link"
          to="/om-vektor"
          activeStyle={activeStyle}
        >
          Om oss
        </NavLink>
        <NavLink
          className="header-link"
          to="/skoler"
          activeStyle={activeStyle}
        >
          For skoler
        </NavLink>
        <NavLink
          className="header-link"
          to="/foreldre"
          activeStyle={activeStyle}
        >
          For foreldre
        </NavLink>
        <NavLink
          className="header-link"
          to="/team"
          activeStyle={activeStyle}
        >
          Team
        </NavLink>
        <NavLink
          className="header-link"
          to="/kontakt"
          activeStyle={activeStyle}
        >
          Kontakt
        </NavLink>
      </div>
    </nav>
  );
};

export default AppHeader;
