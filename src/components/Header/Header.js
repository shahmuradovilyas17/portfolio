import { useContext } from "react";
import "./Header.scss";
import { MainContext } from "../MainContext/MainContext";
import { Navigation } from "../Navigation/Navigation";
import { Link } from "react-router-dom";

export const Header = () => {
  const {
    themeState,
    setThemeState,
    textObj,
    languageState,
    setLanguageState,
  } = useContext(MainContext);

  return (
    <div className="header-wrapper" id={themeState ? "dark" : "light"}>
      <div className="header-inner">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <div className="header-inner-logo">{textObj[languageState].logo}</div>
        </Link>
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
              id={themeState ? "dark" : "light"}
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
