import type React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from "react-router-dom";
import routes from "../../pages/public/routes";
import LoginButtons from "./LoginButtons";
import LoginPopup from "./LoginPopup";
import UserAvatar from "./UserAvatar";
import "./mobile.css";

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
    <NavLink
      reloadDocument
      key={route.path}
      className="text-xl text-gray-600 hover:text-black dark:text-white px-4 py-1.5 text-nowrap"
      to={route.path ?? ""}
      style={({ isActive }) => (isActive ? activeStyle : {})}
    >
      {route.name}
    </NavLink>
  ));
  return (
    <div className="md:hidden">
      <div className="fixed top-5 right-0 bg-[rgba(0,0,0,0.8)] p-1 pr-2 rounded-l-full" >
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
      <button tabIndex={0} className="fixed bottom-10 right-0 bg-[rgba(0,0,0,0.8)] p-1 pr-2 rounded-l-full dropdown dropdown-top dropdown-end" type="button">
        <div className="btn btn-lg bg-primary min-h-16 min-w-16 p-0 border-black border-2 rounded-full shadow-[inset_-5px_-8px_20px_-10px_rgba(0,0,0,0.5)]">
          <FontAwesomeIcon icon={faBars} className="fa-2xl" />
        </div>
        <ul className="mb-2 p-0 overflow-hidden shadow menu menu-compact dropdown-content bg-[#EDF8FC] text-[#313131] rounded-xl w-fit">
          {linkElements}
        </ul>
      </button>
    </div>
  );
};

export default MobileMenu;
