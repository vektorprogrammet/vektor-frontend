import { RemoveScroll } from "react-remove-scroll";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";

const ControlPanel = (): JSX.Element => {
  return (
    <div className="bg-gray-100 flex flex-row">
      <SideBar />
      <RemoveScroll className="w-full h-screen overflow-scroll">
        <Outlet />
      </RemoveScroll>
    </div>
  );
};

export default ControlPanel;
