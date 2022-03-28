import React, { useState } from "react";
import ApplyReg from "./ApplyReg";

const CityButton = ({ onChooseCity, city, isActive }: ChildProps) => {
  const activeClass = isActive ? "text-vektor-darblue border-b-2" : "";
  return (
    <div className="flex-container horizontal text-center px-3 pt-4">
      <button
        type="button"
        className={`
            text-gray-600
            font-bold
            block
            hover:text-vektor-blue
            focus:outline-none
            active:blue
            border-vektor-darblue
            ${activeClass}`}
        onClick={() => {
          onChooseCity(city);
        }}
      >
        {" "}
        {city}
        {" "}
      </button>

      <br />
    </div>
  );
};

enum City {
  OSLO = "Oslo",
  BERGEN = "Bergen",
  TRONDHEIM = "Trondheim",
  ÅS = "Ås",
}

const ParentComponent = () => {
  const [city, setCity] = useState<City>(City.TRONDHEIM);

  return (
    <div className="my-8 flex-col w-screen flex items-center justify-center w-1/2 mx-auto">
      <span className="border-solid border-2 border-vektor-darblue align-items-center">
        <div className="divide-y divide-vektor-darblue bg-white">
          <div className="text-vektor-darblue">
            <span className="flex justify-center">
              <CityButton
                onChooseCity={setCity}
                city={City.TRONDHEIM}
                isActive={city === City.TRONDHEIM}
              />
              <CityButton
                onChooseCity={setCity}
                city={City.OSLO}
                isActive={city === City.OSLO}
              />
              <CityButton
                onChooseCity={setCity}
                city={City.ÅS}
                isActive={city === City.ÅS}
              />
              <CityButton
                onChooseCity={setCity}
                city={City.BERGEN}
                isActive={city === City.BERGEN}
              />
            </span>
          </div>
          <div className="text-center">
            {/* Use ApplyCard when users can apply and NoApllyCard when it is locked */}
            <ApplyReg cities={city} />
          </div>
        </div>
      </span>
    </div>
  );
};
export default ParentComponent;

type ChildProps = {
  onChooseCity: (variable: City) => void;
  city: City;
  isActive: boolean;
};

// setSelected(prevState =>({tab1:"black"}))
