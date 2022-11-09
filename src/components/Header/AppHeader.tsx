import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import routes from "../../pages/public/routes";
import MobileMenu from "./MobileMenu";

const activeStyle: React.CSSProperties = {
  fontWeight: "bold",
};

const AppHeader = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkElements = routes
    .filter((r) => r.route !== "/")
    .map((route) => (
      <NavLink
        key={route.route}
        // className="mt-4 vektor-font font-semibold p-1"
        className="md:header-link mobile-link"
        to={route.route}
        style={({isActive}) => (isActive ? activeStyle : {})}
      >
        {route.route[1].toUpperCase()
          + route.route.substring(2).replace("-", " ")}
      </NavLink>
    ));

  return (
    <nav className="AppHeader md:sticky md:h-28 top-0 shadow-sm z-50 w-full">
      <div className="hidden md:flex mx-auto p-3 space-x-8 items-center justify-center lg:px-8 w-full">
        <div className="w-1/5 justify-center flex">
          <Link to="/">
            <img
              src="images/vektorlogo_pil.png"
              alt="vektorprogrammet logo"
              className="h-16 md:h-20"
            />
          </Link>
        </div>
        <div className="flex flex-grow justify-between max-w-lg m-auto m-6 w-2/5">
          {linkElements}
        </div>
        <div className="flex space-x-4 w-1/5 m-6 justify-start align-middle">
          <button
            type="button"
            className="btn btn-secondary"
          >
            Jeg er ny
          </button>
          <button
            type="button"
            className="btn btn-primary"
          >
            Logg inn
          </button>
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
