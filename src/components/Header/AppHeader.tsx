import type React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LoginButtons from "./LoginButtons";
import LoginPopup from "./LoginPopup";
import MobileMenu from "./MobileMenu";
import UserAvatar from "./UserAvatar";
import routes from "../../pages/public/routes";

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
    <div className="sticky top-0 z-50">
      <div className="hidden md:flex justify-around p-1 lg:px-8 w-full bg-[rgba(226,244,250,0.9)] backdrop-blur-sm">
        <div className="flex w-fit justify-center">
          <div className="btn btn-ghost btn-circle bt-lg bg-accent hover:bg-white">
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
        <div className="flex justify-center items-center gap-8 w-fit">
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
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        setLoginPopupVisible={setLoginPopupVisible}
        isLoggedIn={isLoggedIn}
        loginPopupVisible={loginPopupVisible}
      />
    </div>
  );
};

export default AppHeader;
