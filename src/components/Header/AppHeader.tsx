import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import routes from "../../pages/public/routes";
import MobileMenu from "./MobileMenu";

const activeStyle: React.CSSProperties = {
  fontWeight: "bold",
};

const AppHeader = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkElements = routes.map(
    (route) => (
      <NavLink
        key={route.route}
        // className="mt-4 vektor-font font-semibold p-1"
        className="header-link"
        to={route.route}
        activeStyle={activeStyle}
      >
        {route.component.name.replace(/([A-Z])/g, " $1").trim()}
      </NavLink>
    ),
  );

  return (
    <nav className="AppHeader shadow-md">
      <div className="max-w-8xl hidden md:flex mx-auto p-2 space-x-6 items-end">
        <Link to="/">
          <img src="images/vektor-logo.svg" alt="vektorprogrammet logo" className="h-20" />
        </Link>
        <div className="flex-grow" />
        {linkElements}
      </div>
      <MobileMenu
        links={linkElements}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
    </nav>
  );
};

export default AppHeader;
