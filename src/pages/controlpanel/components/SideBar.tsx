import React from "react";
import {
  BrukereIcon, AssistentIcon, OpptakIcon, OpptaksstatistikkIcon, SkoleIcon, TeamIcon, TeamInteresseIcon,
} from "./Icons";
import { Link } from "react-router-dom";

const HorizontalLine = (): JSX.Element => {
  return <hr className="border-t-2 border-white w-4/5 mt-4" />;
};

interface IconProps {
  svg: React.ReactNode;
  name: string;
}

const Icon: React.FC<IconProps> = ({ svg, name }) => {
  return (
    <div className="flex flex-col items-center justify-center my-2 sm:my-3 md:my-4">
      <button type="button" className="bg-vektor-blue hover:bg-white rounded-full flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 md:w-14 md:h-14">
        {svg}
      </button>
      <div className="text-center text-white mt-1 text-xs md:text-sm mx-2 truncate w-20 sm:w-28 md:w-36">
        {name}
      </div>
    </div>
  );
};

const SideBar = (): JSX.Element => {

  return (
    <div className="bg-vektor-kontrollblue border-8 rounded-3xl w-28 sm:w-40 md:w-48 h-full flex flex-col items-center justify-start fixed">
      <div
        className="bg-white rounded-full flex items-center justify-center mt-4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32"
      >
        <img
          src="/images/vektor-logo-circle.svg"
          className="w-5/6 h-5/6 object-contain"
        />
      </div>
      <HorizontalLine />
      <Link to="brukere"> <Icon svg={<BrukereIcon />} name="Brukere" /> </Link>
      <Link to="assistenter"> <Icon svg={<AssistentIcon />} name="Assistenter" /> </Link>
      <Link to="opptak"> <Icon svg={<OpptakIcon />} name="Opptak" /> </Link>
      <Link to="opptaksstatistikk"> <Icon svg={<OpptaksstatistikkIcon />} name="Opptaksstatistikk" /> </Link>
      <Link to="skoler"> <Icon svg={<SkoleIcon />} name="Skoler" /> </Link>
      <Link to="team"> <Icon svg={<TeamIcon />} name="Team" /> </Link>
      <Link to="teaminteresse"> <Icon svg={<TeamInteresseIcon />} name="Teaminteresse" /> </Link>
    </div>
  );
};

export default SideBar;
