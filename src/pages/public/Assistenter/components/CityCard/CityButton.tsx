import React from "react";

export enum City {
  BERGEN = "Bergen",
  TRONDHEIM = "Trondheim",
  ÅS = "Ås",
}
export type ChildProps = {
  onChooseCity: (variable: City) => void;
  city: City;
  isActive: boolean;
};

export const CityButton = ({ onChooseCity, city, isActive }: ChildProps) => {
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
        {city}
      </button>
      <br />
    </div>
  );
};
