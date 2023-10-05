import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import InfoBoks from "./components/InfoBoks";

const ControlPanel = (): JSX.Element => {
  return (
    <div className="bg-gray-100 flex flex-row h-screen">
      <InfoBoks column1="Donald Duck" column2="donald.duck@disney.na"  column3="90150056" column4="MTDT" column5="Trondheim" column6="" column7="" column8=""/>
      <SideBar />
      <Outlet />
    </div>
  );
};

export default ControlPanel;
