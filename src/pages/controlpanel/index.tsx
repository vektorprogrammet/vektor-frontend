import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";

const ControlPanel = (): JSX.Element => {
  return (
    <div className="bg-gray-100 flex flex-row min-h-screen">
      <SideBar className="fixed min-w-min" />
      <div className="bg-red-500 min-h-screen w-32" />
      <Outlet />
    </div>
  );
};

export default ControlPanel;
