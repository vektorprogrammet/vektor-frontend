import React from "react";
import { Link } from "react-router-dom";
import NavHeader from "./NavHeader";

const Kontrollpanel = (): JSX.Element => {
  // dummy data for buttons on control panel home page
  const mainButtons: Array<string> = [
    "Opptak",
    "Stillinger",
    "Team",
    "Avdelinger",
    "Økonomi",
  ];

  const infoCards: Array<string> = ["Søkere", "Nyheter"];
  // test commit
  // Map control page pages to main buttons
  const buttonElements = mainButtons.map((mainButton) => (
    <Link
      reloadDocument
      key={mainButton.toLowerCase()}
      to={mainButton.toLowerCase()}
      className="w-40 h-40 bg-vektor-blue flex items-center justify-center rounded-lg font-bold hover:bg-vektor-darblue hover:text-white duration-200 shadow-lg hover:mb-2"
    >
      {mainButton}
    </Link>
  ));

  const infoElements = infoCards.map((infoCard) => (
    <div
      key={infoCard}
      className="w-2/5 h-5/6 bg-gray-400 flex items-center justify-center rounded-lg font-bold"
    >
      {infoCard}
    </div>
  ));

  return (
    <div className="flex flex-row h-screen items-end flex-grow p-4">
      <div className="basis-full h-full flex flex-col text-center">
        <NavHeader />
        <div className="h-1/2 flex flex-row items-center justify-center px-12 gap-16">
          {buttonElements}
        </div>
        <div className="h-1/2 flex flex-row items-top justify-center px-12 gap-12">
          {infoElements}
        </div>
      </div>
    </div>
  );
};

export default Kontrollpanel;
