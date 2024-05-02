import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import routes from "../../pages/public/routes";
import MobileMenu from "./MobileMenu";
import LoginPopup from "./LoginPopup";
import UserAvatar from "./UserAvatar";
import LoginButtons from "./LoginButtons";

const activeStyle: React.CSSProperties = {
  fontWeight: "bold",
};

const AppHeader = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginPopupVisible, setLoginPopupVisible] = useState(false);
  const isLoggedIn = true;
  const linkElements = routes.map((route) => (
    <NavLink
      key={route.path}
      className="md:text-gray-600 md:hover:text-blue-400 md:dark:text-white p-1 font-semibold text-nowrap"
      to={route.path ?? ""}
      style={({ isActive }) => (isActive ? activeStyle : {})}
    >
      {route.name}
    </NavLink>
  ));

  return (
    <nav className="md:sticky top-0  z-50 bg-[rgba(226,244,250,0.9)] backdrop-blur-sm">
      <div className="hidden md:flex p-1 justify-between lg:px-8 w-full">
        <div className="w-fit justify-center flex">
          <Link to="/">
            <img
              src="/images/vektor-logo.svg"
              alt="vektorprogrammet logo"
              className="h-16 lg:h-20 dark:hidden"
            />
            <img
              src="/images/vektor-logo-darkmode.png"
              alt="vektorprogrammet logo"
              className="h-16 lg:h-20 hidden dark:block"
            />
          </Link>
        </div>
        <div className="flex justify-center items-center gap-8 w-full">
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
      <MobileMenu
        links={linkElements}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        isLoggedIn={isLoggedIn}
        loginPopupVisible={loginPopupVisible}
        setLoginPopupVisible={setLoginPopupVisible}
      />
    </nav>
  );
};

export default AppHeader;
