import { useContext } from "react";
import "./Header.scss";
import { MainContext } from "../MainContext/MainContext";
import { Navigation } from "../Navigation/Navigation";

export const Header = () => {
  const {
    themeState,
    setThemeState,
    textObj,
    languageState,
    setLanguageState,
  } = useContext(MainContext);

  console.log(languageState);
  return (
    <div className="header-wrapper" id={themeState ? "dark" : "light"}>
      <div className="header-inner">
        <div className="header-inner-logo">{textObj[languageState].logo}</div>
        <div className="header-inner-right-bar">
          <Navigation />
          <div className="header-inner-right-bar-theme-language">
            <div
              className="theme"
              id={themeState ? "dark" : "light"}
              onClick={() => {
                setThemeState((prevState) => {
                  return !prevState;
                });
              }}
            ></div>
            <select
              name="language"
              className="language"
              onChange={(event) => {
                setLanguageState(event.target.value);
              }}
            >
              <option value="EN">EN</option>
              <option value="AZ">AZ</option>
              <option value="RU">RU</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
