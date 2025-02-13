import Tab from "@/components/Header/Tab";
import type React from "react";
import { useState } from "react";
import LoginPopup from "../../pages/controlpanel/components/LoginPopup";
import LoginButtons from "./LoginButtons";
import MobileMenu from "./MobileMenu";
import UserAvatar from "./UserAvatar";

const AppHeader = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-2 z-50">
      <div className="hidden md:flex justify-center lg:px-4 w-full">
        <div className="flex bg-[#ccecf6] bg-opacity-40 rounded-full w-fit px-1.5 mr-12 gap-1 items-center shadow-md backdrop-blur dark:bg-black dark:bg-opacity-40">
          <div className="w-8 h-8">
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
      <div className="hidden md:flex w-fit absolute top-0 h-full right-2 items-center">
        <LoginButtons />
      </div>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};

export default AppHeader;
