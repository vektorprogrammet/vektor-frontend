import { RemoveScroll } from "react-remove-scroll";
import { Outlet } from "react-router";
import { useState } from "react";
import SideBar from "./components/SideBar";
import LoginPopup from "./components/LoginPopup";

const ControlPanel = (): JSX.Element => {
  const [loginPopupVisible, setLoginPopupVisible] = useState(true);
  return (
    <div className="bg-gray-100 flex flex-row">
      {loginPopupVisible ? (
        <LoginPopup setVisible={setLoginPopupVisible} />
      ) : null}
      <SideBar />
      <RemoveScroll className="w-full h-screen overflow-scroll ">
        <Outlet />
      </RemoveScroll>
    </div>
  );
};

export default ControlPanel;
