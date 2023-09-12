import React from "react";
import SideBar from "./SideBar";

const Kontrollpanel = (): JSX.Element => {
  return (
    <div className="border-2 border-black flex flex-row h-screen">
      <SideBar />

      <div className="border-2 bg-red-200 basis-full h-full flex flex-col text-center">
        <div className="h-2/5 bg-gray-200" />

        <div className="h-3/5" />
      </div>
    </div>

  );
};

export default Kontrollpanel;
