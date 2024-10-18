import type React from "react";
import { useState } from "react";
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
    <div className="sticky top-3 z-50">
      <div className="hidden md:flex justify-center lg:px-4 w-full">
        <div className="flex bg-neutral-800 bg-opacity-80 rounded-full w-fit p-2 mr-12 gap-2 items-center backdrop-blur-sm">
          <div className="w-10 h-10">
            <div className="w-full rounded-full">
                <img
                  src="/images/vektor-logo-circle.svg"
                  alt="vektorprogrammet logo"
                />
            </div>
          </div>
          <Tab />
        </div>
      </div>
      <div className="flex w-fit absolute top-0 h-full right-2 items-center">
        {isLoggedIn ? (
          <UserAvatar />
        ) : (
          <LoginButtons setVisible={setLoginPopupVisible} />
        )}
        {loginPopupVisible ? (
          <LoginPopup setVisible={setLoginPopupVisible} />
        ) : null}
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
