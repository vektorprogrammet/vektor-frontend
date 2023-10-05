import React from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import FooterLinks from "./components/FooterLinks";
import FooterSponsors from "./components/FooterSponsors";

const AppFooter = (): JSX.Element => {
  return (
    <footer className="Footer">
      <div className="max-w-6xl mx-auto p-2 py-8 flex justify-between place-items-center flex-col space-y-8 lg:flex-row lg:space-x-4 lg:space-y-0">
        <img src="images/vektor-logo-white.svg" alt="vektorprogrammet logo hvit" className="h-24 md:h-40" />
        <FooterLinks />
        <FooterSponsors />
        <DarkModeToggle />
      </div>
    </footer>
  );
};

export default AppFooter;
