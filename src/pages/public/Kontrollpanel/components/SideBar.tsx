import React from "react";

const SideBar = (): JSX.Element => {
  return (
    <div className="border-2 bg-gray-700 w-48 h-full flex flex-col items-center">
      <div className="bg-gray-700 m-8" id="dropdownContainer">
        <div className="dropdown-trigger">
          <img
            src="https://vektorprogrammet.no/media/cache/profile_img/images/Profile%20photos/644805d1e8ef2.jpeg"
            className="rounded-full"
            alt="vektorbilde"
          />
          <div className="text-white">Aaryan Neupane</div>
        </div>
        <div className="dropdown-content hidden" id="dropdownMenu">
          <a href="#">Item 1</a>
          <a href="#">Item 2</a>
          <a href="#">Item 3</a>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="h-14 w-14 bg-gray-200 border-0">
          1
        </div>
      </div>
    </div>
  );
};

export default SideBar;
