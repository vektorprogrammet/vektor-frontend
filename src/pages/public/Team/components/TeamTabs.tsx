import React from "react";
import Division from "./Division";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="w-full flex flex-wrap">
        <div className="w-full">
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" role="tablist">
            <li className="-mb-px mr-0 last:mr-0 flex-auto text-center">
              <a
                className={`text-base font-bold px-1 py-3 rounded block line leading-normal hover:border-t-2 hover:border-r-2 hover:border-l-2 hover:text-gray-400 ${openTab === 1 ? `text-black bg-white border-t-2 border-r-2 border-l-2` : `text-blue-500 `}`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <i className="fas fa-space-shuttle text-base mr-1" />
                {" "}
                Trondheim
              </a>
            </li>
            <li className="-mb-px mr-0 last:mr-0 flex-auto text-center">
              <a
                className={`text-base font-bold px-1 py-3 rounded block leading-normal hover:border-t-2 hover:border-r-2 hover:border-l-2 hover:text-gray-400 ${openTab === 2 ? `text-black bg-white border-t-2 border-r-2 border-l-2` : `text-blue-500 `}`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <i className="fas fa-cog text-base mr-1" />
                {" "}
                Ås
              </a>
            </li>
            <li className="-mb-px mr-0 last:mr-0 flex-auto text-center">
              <a
                className={`text-base font-bold px-1 py-3 rounded block leading-normal hover:border-t-2 hover:border-r-2 hover:border-l-2 hover:text-gray-400 ${openTab === 3 ? `text-black bg-white border-t-2 border-r-2 border-l-2` : `text-blue-500 `}`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <i className="fas fa-briefcase text-base mr-1" />
                Bergen
              </a>
            </li>
            <li className="-mb-px mr-0 last:mr-0 flex-auto text-center">
              <a
                className={`text-base font-bold px-1 py-3 rounded block leading-normal hover:border-t-2 hover:border-r-2 hover:border-l-2 hover:text-gray-400 ${openTab === 4 ? `text-black bg-white border-t-2 border-r-2 border-l-2` : `text-blue-500 `}`}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                <i className="fas fa-cog text-base mr-1" />
                {" "}
                Hovedstyret
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded border-b-2 border-r-2 border-l-2">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p>
                    <Division title="Title" text="Text" mail="Mail" numberOfMembers="6" />
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    <div> </div>
                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    <div> </div>
                  </p>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <p>
                    <div> </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
