import { createContext, useContext, useEffect } from "react";
import useLocalStorageTate from "../features/hooks/useLocalStorageTate";

const darkModeContext = createContext();

export function DarkModeContextProvider({ children }) {
  const [darkMode, setIsDarkMode, toggleDarkMode] = useLocalStorageTate("darkMode",false);


  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <darkModeContext.Provider value={{ toggleDarkMode, darkMode }}>
      {children}
    </darkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(darkModeContext);
  if (context === undefined)
    throw new Error("darkModeContext was  used outside of Darkmode");
  return context;
}
