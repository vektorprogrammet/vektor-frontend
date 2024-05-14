import { RemoveScroll } from "react-remove-scroll";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import RegionTab from "./components/RegionTab";

const ControlPanel = (): JSX.Element => {
  return (
    <div className="bg-gray-100 flex flex-row">
      <SideBar />
      <RegionTab />
      <RemoveScroll className="w-full h-screen overflow-scroll ">
        <Outlet />
      </RemoveScroll>
    </div>
  );
};

export default ControlPanel;
