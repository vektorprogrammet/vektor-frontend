import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import {RemoveScroll} from 'react-remove-scroll';

const ControlPanel = (): JSX.Element => {
  return (
    <div className="bg-gray-100 flex flex-row min-h-screen">
      <SideBar />
      <RemoveScroll className="w-full h-screen overflow-scroll">
        <Outlet />
      </RemoveScroll>
    </div>
  );
};

export default ControlPanel;
