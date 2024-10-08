import type React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from "react-router-dom";
import routes from "../../pages/public/routes";
import LoginButtons from "./LoginButtons";
import LoginPopup from "./LoginPopup";
import UserAvatar from "./UserAvatar";
import "./mobile.css";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/Drawer"

interface Props {
  menuOpen: boolean;
  setMenuOpen: (values: boolean) => void;
  isLoggedIn: boolean;
  loginPopupVisible: boolean;
  setLoginPopupVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const activeStyle: React.CSSProperties = {
  fontWeight: "600",
  background: "rgba(111,206,238,0.8)",
};

const MobileMenu = (props: Props): JSX.Element => {
  const {
    menuOpen,
    setMenuOpen,
    isLoggedIn,
    loginPopupVisible,
    setLoginPopupVisible,
  } = props;

  const linkElements = routes.map((route) => (
    <li key={route.name}>
      <Link className="text-lg" reloadDocument to={route.path ?? ""}>
          {route.name}
        </Link>
    </li>
  ));
  return (
    <div className="md:hidden">
      <Drawer>
        <DrawerTrigger>
          <div className="flex fixed top-12 right-0 bg-[rgba(0,0,0,0.8)] p-1 pr-2 rounded-l-full" >
            <div className="btn btn-md btn-ghost btn-circle avatar bg-accent">
              <div className="w-full rounded-full border-solid border-2 border-gray-600">
                <img src="/images/team/IT-Tor.png" alt="profile avatar" />
              </div>
            </div>
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
          </DrawerHeader>
          <DrawerDescription>
            <div className="flex justify-between items-start p-6">
              <ul className="flex flex-col w-full items-start text-center gap-4">
                {linkElements}
              </ul>
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
          </DrawerDescription>
          <DrawerFooter>
            <DrawerClose>
              <button type="button" className="btn btn-outline btn-error">Close</button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileMenu;
