import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";

const ControlPanel = (): JSX.Element => {
  return (
    <div className="bg-gray-100 flex flex-row min-h-screen">
      <SideBar />
      <Outlet />

    </div>
  );
};

export default ControlPanel;
