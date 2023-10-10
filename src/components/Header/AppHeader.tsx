import React, {
  useState,
} from "react";
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
      className="header-link mobile-link"
      to={route.path ?? ""}
      style={({ isActive }) => (isActive ? activeStyle : {})}
    >
      {route.name}
    </NavLink>
  ));

  return (
    <nav className="AppHeader md:sticky top-0 shadow-sm z-50">
      <div className="hidden md:flex mx-auto p-3 space-x-6 items-center justify-center lg:px-8 w-full max-w-7xl">
        <div className="w-1/5 justify-center flex">
          <Link to="/">
            <img src="images/vektor-logo.svg" alt="vektorprogrammet logo" className="h-16 lg:h-20 dark:hidden" />
            <img src="images/vektor-logo-darkmode.png" alt="vektorprogrammet logo" className="h-16 lg:h-20 hidden dark:block" />
          </Link>
        </div>
        <div className="flex flex-grow justify-evenly justify-self-center max-w-lg m-auto items-center w-2/5">
          {linkElements}
        </div>
        <div className="flex w-1/5 justify-center">
          {isLoggedIn ? <UserAvatar /> : <LoginButtons setVisible={setLoginPopupVisible} />}
        </div>
        <div>
          {loginPopupVisible ? <LoginPopup setVisible={setLoginPopupVisible} /> : null}
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
