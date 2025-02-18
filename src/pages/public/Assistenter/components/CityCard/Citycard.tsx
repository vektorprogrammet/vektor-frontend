import { useState } from "react";
import ApplyReg from "../ApplyReg";
import { City } from "./CityButton";

const Tab = ({
  city,
  onTabClick,
  open,
}: {
  onTabClick: () => void;
  city: City;
  open: boolean;
}) => {
  const chosenStyle = open
    ? `tab-active dark:text-vektor-darblue`
    : `text-vektor-darblue dark:text-gray-300`;
  return (
    <button
      type="button"
      className={`tab tab-lifted w-1/3 text-base font-bold border-white dark:hover:bg-neutral-700 ${chosenStyle}`}
      onClick={onTabClick}
      data-toggle="tab"
      role="tablist"
    >
      {city}
    </button>
  );
};

const Tabs = () => {
  const [openTab, setOpenTab] = useState(City.TRONDHEIM);
  return (
    <div className="w-full">
      <div
        className="tabs w-full flex text-sm font-medium text-gray-500 border-gray-200 dark:border-gray-700 dark:text-gray-900"
        role="tablist"
      >
        {Object.values(City).map((value) => (
          <Tab
            city={value}
            onTabClick={() => setOpenTab(value)}
            open={openTab === value}
            key={value}
          />
        ))}
      </div>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 border-b-[1px] border-r-[1px] border-l-[1px] px-4 py-5 flex-auto tab-content tab-space dark:bg-neutral-800">
        <ApplyReg cities={openTab} />
      </div>
    </div>
  );
};

export default Tabs;
