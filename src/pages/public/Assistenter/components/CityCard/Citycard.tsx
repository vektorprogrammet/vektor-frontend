import React from "react";
import ApplyReg from "../ApplyReg";
import { City } from "./CityButton";

const Tab = (
  {
    city,
    onTabClick,
    open,
  }:{ onTabClick: ()=>void,
    city: City,
    open: boolean },
): JSX.Element => {
  const chosenStyle = open ? `tab-active` : `text-vektor-darblue`;
  return (
      <a
        type="button"
        className={`tab tab-lifted w-1/3 text-base font-bold border-white ${chosenStyle}`}
        onClick={onTabClick}
        data-toggle="tab"
        role="tablist"
      >
        {city}
      </a>
  );
};

const Tabs = (): JSX.Element => {
  const [openTab, setOpenTab] = React.useState(City.TRONDHEIM);
  return (
    <>
      <div className="w-full">
        <div className="tabs w-full flex text-sm font-medium text-gray-500 border-gray-200 dark:border-gray-700 dark:text-gray-400" role="tablist">
          {Object.values(City).map((value) => (
            <Tab
              city={value}
              onTabClick={() => setOpenTab(value)}
              open={openTab === value}
            />
          ))}
        </div>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 border-b-[1px] border-r-[1px] border-l-[1px] px-4 py-5 flex-auto tab-content tab-space">
          <ApplyReg cities={openTab} />
        </div>
      </div>
    </>
  );
};

export default Tabs;