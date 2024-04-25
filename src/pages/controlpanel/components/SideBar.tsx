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
  return <hr className="border-t-2 border-white w-4/5" />;
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
    name: "Statistikk",
  },
  { to: "skoler", icon: <SkoleIcon />, name: "Skoler" },
  { to: "team", icon: <TeamIcon />, name: "Team" },
  { to: "teaminteresse", icon: <TeamInteresseIcon />, name: "Interesse" },
];

const Icon: React.FC<IconProps> = ({ svg, name }) => {
  return (
    // The svg on hover is styled in app.css
    <div className="iconWrapper flex flex-col items-center justify-center my-1 [&>*:first-child]:bg-vektor-blue [&>*:first-child]:hover:bg-white p-2">
      <div className="rounded-full flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11">
        {svg}
      </div>
      <div className="text-center text-white text-xs md:text-sm mx-2 truncate w-fit">
        {name}
      </div>
    </div>
  );
};

const SideBar = (): JSX.Element => {
  return (
    <div className="self-center min-w-min h-fit bg-vektor-kontrollblue ml-2 rounded-3xl flex flex-col items-center justify-start">
      <Link to="/" className="bg-white rounded-full flex items-center justify-center m-3 w-16 h-16">
        <img
          src="/images/vektor-logo-circle.svg"
          className="w-5/6 h-5/6 object-contain"
        />
      </Link>
      <HorizontalLine/>
      <div className="my-3">
        {linkData.map((item) => (
          <Link key={item.name} to={item.to}>
            <Icon svg={item.icon} name={item.name} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
