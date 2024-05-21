import type React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import routes from "../../pages/public/routes";
import LoginButtons from "./LoginButtons";
import LoginPopup from "./LoginPopup";
import MobileMenu from "./MobileMenu";
import UserAvatar from "./UserAvatar";

const activeStyle: React.CSSProperties = {
  fontWeight: "bold",
  color: "#023874",
};

const AppHeader = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginPopupVisible, setLoginPopupVisible] = useState(false);
  const isLoggedIn = true;
  const navRoutes = routes.filter(route => route.path);
  const linkElements = navRoutes.map((route) => (
      <NavLink
        key={route.path}
        className="md:text-gray-600 md:hover:text-black md:dark:text-white p-1 font-semibold text-nowrap"
        to={route.path ?? ""}
        style={({ isActive }) => (isActive ? activeStyle : {})}
      >
        {route.name}
      </NavLink>
  ));

  return (
    <nav className="sticky top-0 z-50">
      <div className="flex justify-between md:justify-around p-1 lg:px-8 w-full md:lg-[rgba(226,244,250,0.9)] md:backdrop-blur-sm">
        <div className="hidden md:flex w-fit justify-center">
          <div className="btn btn-ghost btn-circle md:btn-lg bg-accent hover:bg-white">
            <div className="w-full rounded-full">
              <Link to="/">
                <img
                  src="/images/vektor-logo-circle.svg"
                  alt="vektorprogrammet logo"
                />
                <img
                  src="/images/vektor-logo-darkmode.png"
                  alt="vektorprogrammet logo"
                  className="h-16 lg:h-20 hidden dark:block"
                />
              </Link>
            </div>
          </div>
        </div>
        <button tabIndex={0} className="md:hidden dropdown dropdown-bottom" type="button">
          <div className="w-fit justify-center flex">
            <div className="btn btn-ghost btn-circle md:btn-lg bg-accent hover:bg-white">
              <div className="w-full rounded-full">
                <img
                  src="/images/vektor-logo-circle.svg"
                  alt="vektorprogrammet logo"
                />
                <img
                  src="/images/vektor-logo-darkmode.png"
                  alt="vektorprogrammet logo"
                  className="h-16 lg:h-20 hidden dark:block"
                />
              </div>
            </div>
            <ul className="mt-2 left-[0px] p-2 shadow menu menu-compact dropdown-content bg-[#EDF8FC] text-[#313131] rounded-box w-52">
              {linkElements}
            </ul>
          </div>
        </button>
        <div className="hidden md:flex justify-center items-center gap-8 w-fit">
          {linkElements}
        </div>
        <div className="flex w-fit justify-center">
          {isLoggedIn ? (
            <UserAvatar />
          ) : (
            <LoginButtons setVisible={setLoginPopupVisible} />
          )}
          {loginPopupVisible ? (
            <LoginPopup setVisible={setLoginPopupVisible} />
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
