import type React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LoginButtons from "./LoginButtons";
import LoginPopup from "./LoginPopup";
import MobileMenu from "./MobileMenu";
import UserAvatar from "./UserAvatar";
import Tab from "@/components/Header/Tab";

const AppHeader = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginPopupVisible, setLoginPopupVisible] = useState(false);
  const isLoggedIn = false;

  return (
    <div className="sticky top-0 z-50">
      <div className="hidden md:flex justify-around p-1 lg:px-8 w-full bg-vektor-bg backdrop-blur-sm bg-opacity-90 dark:bg-vektor-bg-dark dark:bg-opacity-90">
        <div className="flex w-fit items-center">
          <div className="btn btn-ghost btn-circle btn-md hover:bg-white">
            <div className="w-full rounded-full">
              <Link to="/">
                <img
                  src="/images/vektor-logo-circle.svg"
                  alt="vektorprogrammet logo"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-8 w-fit">
          <Tab />
        </div>
        <div className="flex w-fit items-center">
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
