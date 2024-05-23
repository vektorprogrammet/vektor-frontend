import React, { type Dispatch, type SetStateAction } from "react";

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
  setLoginPopupVisible: Dispatch<SetStateAction<boolean>>;
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
    <button tabIndex={0} className="md:hidden fixed bottom-10 right-5 dropdown dropdown-top dropdown-end" type="button">
      <div className="btn btn-lg bg-primary border-black border-2 rounded-[1.2rem] shadow-[inset_-5px_-8px_20px_-10px_rgba(0,0,0,0.5)]">
        <p>=</p>
      </div>
      <ul className="mb-2 p-0 overflow-hidden shadow menu menu-compact dropdown-content bg-[#EDF8FC] text-[#313131] rounded-xl w-fit">
        {linkElements}
      </ul>
    </button>
  );
};

export default MobileMenu;
