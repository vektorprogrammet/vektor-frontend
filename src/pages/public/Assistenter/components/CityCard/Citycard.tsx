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
  const chosenStyle = open ? `border-t-gray-200 border-l-gray-200 border-r-gray-200 border-b-white text-vektor-darblue z-50` : `text-vektor-darblue z-50`;
  return (
    <div className="flex-auto text-center border-gray-200 border-b-2 -mb-[2px] z-50">
      <button
        type="button"
        className={`rounded-t-lg -mb-[2px] z-50 text-base w-full font-bold py-3 border-b-gray-200 hover:border-2 hover:border-gray-200 hover:text-vektor-blue border-2 border-b-2 border-white ${chosenStyle}`}
        onClick={onTabClick}
        data-toggle="tab"
        role="tablist"
      >
        {city}
      </button>
    </div>
  );
};

const Tabs = (): JSX.Element => {
  const [openTab, setOpenTab] = React.useState(City.TRONDHEIM);
  return (
    <>
      <div className="w-full">
        <div className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-gray-200 dark:border-gray-700 dark:text-gray-400" role="tablist">
          {Object.values(City).map((value) => (
            <Tab
              city={value}
              onTabClick={() => setOpenTab(value)}
              open={openTab === value}
            />
          ))}
        </div>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 border-b-2 border-r-2 border-l-2 px-4 py-5 flex-auto tab-content tab-space z-40">
          <ApplyReg cities={openTab} />
        </div>
      </div>
    </>
  );
};

export default Tabs;
