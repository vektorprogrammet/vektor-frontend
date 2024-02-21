import React from "react";
import { Link } from "react-router-dom";
import {
  BrukereIcon,
  AssistentIcon,
  OpptakIcon,
  OpptaksstatistikkIcon,
  SkoleIcon,
  TeamIcon,
  TeamInteresseIcon,
} from "./Icons";

const HorizontalLine = (): JSX.Element => {
  return <hr className="border-t-2 mb-2 border-white w-4/5 mt-4" />;
};

interface IconProps {
  svg: React.ReactNode;
  name: string;
}

const linkData = [
  { to: "brukere", icon: <BrukereIcon />, name: "Brukere" },
  { to: "assistenter", icon: <AssistentIcon />, name: "Assistenter" },
  { to: "opptak", icon: <OpptakIcon />, name: "Opptak" },
  {
    to: "opptaksstatistikk",
    icon: <OpptaksstatistikkIcon />,
    name: "Opptaksstatistikk",
  },
  { to: "skoler", icon: <SkoleIcon />, name: "Skoler" },
  { to: "team", icon: <TeamIcon />, name: "Team" },
  { to: "teaminteresse", icon: <TeamInteresseIcon />, name: "Teaminteresse" },
];

const Icon: React.FC<IconProps> = ({ svg, name }) => {
  return (
    <div className="flex flex-col items-center justify-center my-2">
      <button
        type="button"
        className="bg-vektor-blue hover:bg-white rounded-full flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11"
      >
        {svg}
      </button>
      <div className="text-center text-white text-xs md:text-sm mx-2 truncate w-20 sm:w-28 md:w-36">
        {name}
      </div>
    </div>
  );
};

const SideBar = (): JSX.Element => {
  return (
    <div className="bg-vektor-kontrollblue border-8 rounded-3xl w-24 sm:w-32 md:w-40 h-auto flex flex-col items-center justify-start overflow-y-auto overflow-x-hidden">
      <div className="bg-white rounded-full flex items-center justify-center mt-2 w-16 h-16 sm:w-24 sm:h-24">
        <img
          src="/images/vektor-logo-circle.svg"
          className="w-5/6 h-5/6 object-contain"
        />
      </div>
      <HorizontalLine />
      {linkData.map((item) => (
        <Link key={item.name} to={item.to}>
          <Icon svg={item.icon} name={item.name} />
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
