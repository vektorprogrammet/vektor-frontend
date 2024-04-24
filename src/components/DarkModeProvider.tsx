import React, { useEffect, useMemo, useState } from "react";

export const DarkModeContext = React.createContext({
  darkMode: false,
  setDarkMode: (() => {
    throw new Error("No DarkModeContext provided");
  }) as (_: boolean) => void,
});

export const DarkModeProvider = (props: { children: JSX.Element }) => {
  const [darkMode, setDarkModeState] = useState(
    localStorage.getItem("darkMode") === "dark",
  );
  const { children } = props;

  const setDarkMode = (newDarkMode: boolean) => {
    if (newDarkMode) {
      localStorage.setItem("darkMode", "dark");
    } else {
      localStorage.removeItem("darkMode");
    }
    setDarkModeState(newDarkMode);
  };

  const providerValue = useMemo(() => ({ darkMode, setDarkMode }), [darkMode]);

  // Effect called on first render, and whenever darkMode changes
  // Tailwind has classes triggered by the "dark" class on parent elements
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) html.classList.add("dark");
    else html.classList.remove("dark");
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={providerValue}>
      {children}
    </DarkModeContext.Provider>
  );
};
