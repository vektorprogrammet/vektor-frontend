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
  const linkElements = routes.map((route) => (
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
    <nav className="md:sticky top-0  z-50 bg-[rgba(226,244,250,0.9)] backdrop-blur-sm dark:bg-[#2a2a2a]">
      <div className="hidden md:flex p-1 justify-between lg:px-8 w-full">
        <div className="w-fit justify-center flex">
          <Link to="/">
            <img
              src="/images/vektor-logo.svg"
              alt="vektorprogrammet logo"
              className="h-16 lg:h-20"
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
