import React, { useState } from "react";
import ApplyReg from "../ApplyReg";
import { City, CityButton } from "./CityButton";

const Citycard = () => {
  const [city, setCity] = useState<City>(City.TRONDHEIM);

  return (
    <div className="my-8 flex-col w-screen flex items-center justify-center w-1/2 mx-auto">
      <span className="border-solid border-2 border-vektor-darblue align-items-center">
        <div className="divide-y divide-vektor-darblue bg-white">
          <div className="text-vektor-darblue">

            <span className="flex justify-center">
              {Object.values(City).map((cityValue) => (
                <CityButton
                  onChooseCity={setCity}
                  city={cityValue}
                  isActive={city === cityValue}
                />
              ))}
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
export default Citycard;
