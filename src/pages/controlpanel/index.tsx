import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import RegionTab from "./components/RegionTab";

const ControlPanel = (): JSX.Element => {
  return (
    <div className="bg-gray-100 flex flex-row min-h-screen">
      <SideBar />
      <Outlet />
      <RegionTab />
    </div>
  );
};

export default ControlPanel;
