import React from "react";
import {BrukereIcon, AssistentIcon, OpptakIcon, OpptaksstatistikkIcon, SkoleIcon, TeamIcon, TeamInteresseIcon} from './Icons';

const HorizontalLine = (): JSX.Element => {
  return <hr className="border-t-2 border-white w-4/5 mt-4" />;
};

type IconProps = {
  svg: React.ReactNode;
  name: string;
};

const Icon: React.FC<IconProps> = ({ svg, name }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-vektor-blue rounded-full flex items-center justify-center mt-4 w-8 h-8 sm:w-11 sm:h-11 md:w-14 md:h-14">
        {svg}
      </div>
      <div className="flex items-center justify-center text-white mt-1 text-xs md:text-sm">
        {name}
      </div>
    </div>
  );
};

const SideBar = (): JSX.Element => {
  return (
    <div className="bg-vektor-kontrollblue border-8 rounded-3xl w-28 sm:w-40 md:w-48 h-full flex flex-col items-center justify-start">
      <div
        className="bg-white rounded-full flex items-center justify-center mt-4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32"
      >
        <img
          src="/images/vektor-logo-circle.svg"
          className="w-5/6 h-5/6 object-contain"
        />
      </div>
      <HorizontalLine />
      <Icon svg={<BrukereIcon />} name="Brukere" />
      <Icon svg={<AssistentIcon />} name="Assistenter" />
      <Icon svg={<OpptakIcon />} name="Opptak" />
      <Icon svg={<OpptaksstatistikkIcon />} name="Opptaksstatistikk" />
      <Icon svg={<SkoleIcon />} name="Skoler" />
      <Icon svg={<TeamIcon />} name="Team" />
      <Icon svg={<TeamInteresseIcon />} name="Teaminteresse" />
    </div>
  );
};

export default SideBar;
