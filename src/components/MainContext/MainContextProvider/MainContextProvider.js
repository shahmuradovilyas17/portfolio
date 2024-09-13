import { useState } from "react";
import { MainContext } from "../MainContext";

export const MainContextProvider = ({ children }) => {
  const [themeState, setThemeState] = useState(true);
  const [languageState, setLanguageState] = useState("EN");

  const textObj = {
    EN: {
      logo: "PortfolioSite",
    },
    AZ: {
      logo: "PortfolioSaytı",
    },
    RU: {
      logo: "СайтПортфолио",
    },
  };
  return (
    <MainContext.Provider
      value={{
        themeState,
        setThemeState,
        languageState,
        setLanguageState,
        textObj,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
