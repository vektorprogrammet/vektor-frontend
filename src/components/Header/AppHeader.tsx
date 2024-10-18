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
    <div className="sticky top-4 z-50">
      <div className="hidden md:flex justify-between lg:px-4 w-full">
        <div className="flex bg-neutral-800 bg-opacity-80 rounded-full w-fit p-2 gap-2 items-center backdrop-blur-sm">
          <div className="btn btn-ghost btn-circle btn-sm w-10 h-10 hover:bg-black hover:bg-opacity-40">
            <div className="w-full rounded-full">
              <Link to="/">
                <img
                  src="/images/vektor-logo-circle.svg"
                  alt="vektorprogrammet logo"
                />
              </Link>
            </div>
          </div>
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
