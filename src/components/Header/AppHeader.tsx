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
  const [errorMessage, setErrorMessage] = useState('');
  const [imgClassName, setimgClassName] = useState('h-52 mt-12 ml-16');

  const closeOrOpen: MouseEventHandler<HTMLDivElement> = (e) => {
    const isClose = (e.target as HTMLElement).closest("#popup")
    if (!isClose) {
      setVisible(false);
    }
  }

  function isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  const checkEmailAndPassword = () => {
    if (!isValidEmail(email)) {
      setErrorMessage('Email ugyldig, prøv igjen!');
    } else if (password.length < 6) {
      setErrorMessage('Passord ugyldig, prøv igjen!');
    } else {
      setErrorMessage('');
    }
  }

  // Logs in the mail and password set
  const logIn = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    checkEmailAndPassword();
    //do something to loginhere
    // .catch((error) => {
    //    showError(error);
    //     });
  }

  function handleEnterLogIn(event: React.KeyboardEvent<HTMLInputElement>): void {
    if (event.key === 'Enter') {
      logIn(event); // calling the same function that is called when the "Log in" button is clicked
    }
  }

  return (
    <div className="bg-black/40 fixed top-0 left-0 w-full h-screen flex justify-center items-center" onClick={closeOrOpen}>
      <div className="bg-white flex p-7.5 rounded-lg justify-around w-2/5 h-96 border-2 pl-16" id="popup">
        <button className="btn btn-primary btn-square btn-outline fixed ml-96 mt-6 text-2xl cursor-pointer" onClick={() => setVisible(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <img
            src="../images/TorPekerPåTekst1.png"
            className={imgClassName}
            alt="vektorbilde"
            />
        {errorMessage.length > 0 ? 
          <div className="bg-white border border-gray-400 rounded-lg shadow-md p-4 max-w-xs mx-auto mt-24 mr-2 relative h-36">
            <div className="text-gray-800">
              <p className="text-red-500 font-semibold">{errorMessage}</p>
          </div>
          <div className="absolute right-20 top-18 mb-3">
            <div className="w-6 h-6 transform rotate-45 bg-white border-b border-l border-gray-400"></div>
          </div>
          </div>
         : null }
        
        {/* <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
        </div> */}


        
        <div className="mr-52 mt-24">
          <div>
            <p className="font-semibold">Brukernavn/E-post</p>
            <input className="border-2 rounded-lg py-2 px-4 w-80 my-4"
                  id="email" type="text" placeholder="E-post" value={email} 
                  onChange={(e) => { setEmail(e.target.value) }} 
                  onFocus={() => setimgClassName('h-52 mt-12 ml-16')}
                  onKeyDown={handleEnterLogIn} />
          </div>
          <div>
            <p className="font-semibold">Passord</p>
            <input className="border-2 rounded-lg py-2 px-4 w-80 mt-4 mb-2" 
                    id="password" type="password" placeholder="Passord" value={password} 
                    onChange={(e) => { setPassword(e.target.value) }}
                    onFocus={() => setimgClassName('h-52 mt-40 ml-16')}
                    onKeyDown={handleEnterLogIn} />
            <p className="text-red-500 font-semibold mb-2">{errorMessage}</p>
          </div>
          <div>
            <button
            type="button"
            className="btn btn-primary bg-blue-400 hover:bg-blue-900 text-white px-4 py-2 rounded-full duration-300 mr-24"
            onClick={(e) => logIn(e)}
            >
            Logg inn
            </button>
            <u className="text-blue-400 cursor-pointer">
              Glemt Passord?
            </u>
          </div>
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
