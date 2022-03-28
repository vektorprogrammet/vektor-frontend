import { DarkModeContext } from "components/DarkModeProvider";
import React, { useContext } from "react";

import "./DarkModeToggle.css";

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <input
      className="darkModeToggle"
      type="checkbox"
      checked={darkMode}
      onChange={(e) => {
        setDarkMode(e.target.checked);
      }}
    />
  );
};

export default DarkModeToggle;
