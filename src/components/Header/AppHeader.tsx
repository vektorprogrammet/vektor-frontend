import React, { Dispatch, MouseEventHandler, SetStateAction, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import routes from "../../pages/public/routes";
import MobileMenu from "./MobileMenu";

const activeStyle: React.CSSProperties = {
  fontWeight: "bold",
};

const UserAvatar = () => {
  return (
    <button tabIndex={0} className="dropdown dropdown-end" type="button">
      <div className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://placeimg.com/80/80/people"
            alt="profile avatar"
          />
        </div>
      </div>
      <ul className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a href="#0">Kontrollpanel</a>
        </li>
        <li>
          <a href="#0">Min side</a>
        </li>
        <li>
          <a href="#0">Profil</a>
        </li>
        <li>
          <a href="#0">Mine utlegg</a>
        </li>
        <li className="text-red-500">
          <a href="#0">Logg ut</a>
        </li>
      </ul>
    </button>
  );
};

const LoginButtons = ({setVisible}: {setVisible: Dispatch<SetStateAction<boolean>>}) => {
  return (
    <div className="flex space-x-4">
      <button
        type="button"
        className="bg-blue-900 hover:bg-gray-800 text-white px-4 py-2 rounded-full duration-300"
      >
        Jeg er ny
      </button>
      <button
        type="button"
        className="bg-blue-400 hover:bg-blue-900 text-white px-4 py-2 rounded-full duration-300"
        onClick={() => setVisible(true)}
      >
        Logg inn
      </button>
    </div>
  );
};



const LoginPopup = ({setVisible}: {setVisible: Dispatch<SetStateAction<boolean>>}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const closeOrOpen: MouseEventHandler<HTMLDivElement> = (e) => {
    const isClose = (e.target as HTMLElement).closest("#popup")
    if (!isClose) {
      setVisible(false);
    }
  }
  return (
    <div className="bg-black/50 fixed top-0 left-0 w-full h-screen flex justify-center items-center" onClick={closeOrOpen}>
      <div className="bg-white flex p-7.5 flex-col rounded-lg gap-2.5" id="popup">
        <div>
          <p>Email</p>
          <input className="py-6 px-4" id="email" type="text" placeholder="E-post" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        </div>
        <div>
          <p>Password</p>
          <input className="py-6 px-4" id="password" type="password" placeholder="Passord" value={password} onChange={(e) => { setPassword(e.target.value) }} />
        </div>
        <div>
          <button
          type="button"
          className="bg-blue-400 hover:bg-blue-900 text-white px-4 py-2 rounded-full duration-300"
          onClick={() => setVisible(true)}
          >
        Logg inn
      </button>
        </div>
      </div>
    </div>
  )
}

const AppHeader = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginPopupVisible, setLoginPopupVisible] = useState(false);
  const isLoggedIn = false;
  const linkElements = routes.map((route) => (
    <NavLink
      key={route.route}
      // className="mt-4 vektor-font font-semibold p-1"
      className="header-link mobile-link"
      to={route.route}
      style={({ isActive }) => (isActive ? activeStyle : {})}
    >
      {route.route[1].toUpperCase()
        + route.route.substring(2).replace("-", " ")}
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
          {isLoggedIn ? <UserAvatar /> : <LoginButtons setVisible={setLoginPopupVisible}/>}
        </div>
        <div>
          {loginPopupVisible ? <LoginPopup setVisible={setLoginPopupVisible}/> : null}
        </div>
      </div>
      <MobileMenu
        links={linkElements}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
    </nav>
  );
};

export default AppHeader;
