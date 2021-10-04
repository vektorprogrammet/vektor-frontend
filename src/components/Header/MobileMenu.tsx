import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./mobile.css";

interface Props {
  menuOpen: boolean,
  setMenuOpen: (values: boolean) => void;
  links: Array<JSX.Element>,
}

const MobileMenu = (props: Props): JSX.Element => {
  // Eslint forced the line below
  const { links, menuOpen } = props;
  return (
    <div className="fixed vektor-font">
      <div
        role="button"
        tabIndex={0}
        aria-label="closeOverlay"
        onKeyPress={() => { props.setMenuOpen(!props.menuOpen); }}
        onClick={() => { props.setMenuOpen(!props.menuOpen); }}
        className={`closeMenu z-50 ${menuOpen ? "open" : "closed"}`}
      />
      <div className="relative md:hidden z-10 flex shadow-md w-screen text-3xl bg-white">
        <div
          className="burger-wrapper fixed -ml-4 -mt-4 block font-bold dark-blue-vektor md:inline-block "
        >
          <div
            role="button"
            tabIndex={0}
            aria-label="closeOverlay"
            onKeyPress={() => { props.setMenuOpen(!props.menuOpen); }}
            onClick={() => { props.setMenuOpen(!props.menuOpen); }}
            className="hamburger"
          >
            <div />
          </div>
        </div>
        <Link
          className="relative font-bold dark-blue-vektor text-2xl flex my-3 m-auto"
          onClick={() => {
            if (props.menuOpen) { props.setMenuOpen(false); }
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
            aria-label="closeOverlay"
            onKeyPress={() => { props.setMenuOpen(!props.menuOpen); }}
            onClick={() => { props.setMenuOpen(!props.menuOpen); }}
            className="md:hidden slide-to-be-closed fixed expanded">
            <nav className="slide-to-be-closed mt-23 p-4 flex flex-col text-2xl space-y-4">
              {links}
            </nav>
          </div>
        ) : (
          <div className="md:hidden slide-to-be-opened fixed expand">
            <nav className="slide-to-be-opened mt-23 p-4 flex flex-col text-2xl space-y-4">
              {links}
            </nav>
          </div>
        )
      }
    </div>
  );
};

export default MobileMenu;
