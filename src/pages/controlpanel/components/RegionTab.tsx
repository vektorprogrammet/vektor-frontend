import { set } from 'cypress/types/lodash';
import React from 'react';

const RegionTab = (): JSX.Element => {
  const [value, setValue] = React.useState('');
  const [position, setPosition] = React.useState('');

  const handleChange = (region: string) => {
    setValue(region);
    if (region === "Trondheim") {
      setPosition('right-12');
    }
    if (region === "Bergen") {
      setPosition('right-20');
    }
    if (region === "Ås") {
      setPosition('right-28');
    }
  }

  return (
    <div className="fixed right-12 top-6 flex h-12">
      <button onClick={() => handleChange("Trondheim")} type="button" className={`login-buttons text-white px-4 w-26 rounded-l-full ease-in duration-300 ${value === "Trondheim" ? "bg-blue-900" : "bg-blue-400 hover:bg-blue-300"}`}>
            Trondheim
      </button>
      <button onClick={() => handleChange("Bergen")} type="button" className={`login-buttons text-white px-4 w-24 ease-in duration-300 ${value === "Bergen" ? "bg-blue-900" : "bg-blue-400 hover:bg-blue-300"}`}>
            Bergen
      </button>
      <button onClick={() => handleChange("Ås")} type="button" className={`login-buttons text-white px-4 w-20 rounded-r-full ease-in duration-300 ${value === "Ås" ? "bg-blue-900" : "bg-blue-400 hover:bg-blue-300"}`}>
            Ås
      </button>
    </div>
  );
}

export default RegionTab;