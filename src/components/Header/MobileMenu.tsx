import React from "react";

import { Link } from "react-router-dom";

import "./mobile.css";

interface Props {
  menuOpen: boolean,
  setMenuOpen: (values: boolean) => void;
  links: Array<JSX.Element>,
}

const MobileMenu = (props: Props): JSX.Element => {
  const { links, menuOpen, setMenuOpen } = props;
  return (
    <div className="fixed vektor-font">
      <div className="relative md:hidden z-10 flex shadow-md w-screen text-3xl bg-white">
        <div
          role="button"
          tabIndex={0}
          aria-label="closeOverlay"
          onKeyPress={() => { setMenuOpen(!menuOpen); }}
          onClick={() => { setMenuOpen(!menuOpen); }}
          className="hamburger"
        >
          <span className={`hamburger-span  ${menuOpen ? "top-bun" : ""}`} />
          <span className={`hamburger-span mt-3 ${menuOpen ? "patty" : ""}`} />
          <span className={`hamburger-span mt-6 ${menuOpen ? "bottom-bun" : ""}`} />
        </div>
        <Link
          className="relative font-bold vektor-dark-blue text-2xl flex my-3 m-auto"
          onClick={() => {
            if (menuOpen) { setMenuOpen(!menuOpen); }
          }}
          to="/"
        >
          Vektorprogrammet
        </Link>
      </div>
      {
        menuOpen ? (
          <div
            role="button"
            tabIndex={0}
            aria-label="closeOverlayButton"
            onKeyPress={() => { setMenuOpen(!menuOpen); }}
            onClick={() => { setMenuOpen(!menuOpen); }}
            className="md:hidden drawer-content fixed"
          >
            <nav className="drawer-content flex flex-col text-2xl">
              {links}
            </nav>
          </div>
        ) : (
          <div className="md:hidden drawer-content closed-drawer fixed">
            <nav className="drawer-content flex flex-col text-2xl">
              {links}
            </nav>
          </div>
        )
      }
    </div>
  );
};

export default MobileMenu;
