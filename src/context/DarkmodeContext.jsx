import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else document.documentElement.classList.remove("dark");
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (context === undefined)
    throw new Error("Dark Mode context cannot be used outside its Provider");
  return context;
}

export { DarkModeProvider, useDarkMode };
