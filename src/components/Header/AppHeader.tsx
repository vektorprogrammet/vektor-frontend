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
        className="header-link mobile-link"
        to={route.route}
        style={({ isActive }) => (isActive ? activeStyle : {})}
      >
        {route.route[1].toUpperCase() + route.route.substring(2).replace("-", " ")}
      </NavLink>
    ),
  );

  return (
    <nav className="AppHeader md:sticky top-0 shadow-sm z-50">
      <div className="hidden md:flex mx-auto p-3 space-x-8 items-center justify-center lg:px-8 w-full max-w-7xl">
        <div className="w-1/5 justify-center flex">
          <Link to="/">
            <img src="images/vektor-logo.svg" alt="vektorprogrammet logo" className="h-16 lg:h-20" />
          </Link>
        </div>
        <div className="flex flex-grow justify-between justify-self-center max-w-lg m-auto items-center w-2/5">
          {linkElements}
        </div>
        <div className="flex space-x-4 w-1/5 justify-start">
          <button type="button" className="bg-blue-900 hover:bg-grey-800 text-white px-6 py-2 rounded-full">Jeg er ny</button>
          <button type="button" className="bg-blue-400 hover:bg-blue-900 text-white px-6 py-2 rounded-full">Logg inn</button>
        </div>
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
