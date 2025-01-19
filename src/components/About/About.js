import "./About.scss";
import profPicture from "../../assets/images/ProfilePicture.png";
import { MainContext } from "../MainContext/MainContext";
import { useContext } from "react";

export const About = () => {
  const { themeState, textObj, languageState } = useContext(MainContext);

  return (
    <div className="about-menu-wrapper" id={themeState ? "dark" : "light"}>
      <div className="about-menu-inner">
        <div className="about-menu-content">
          <div className="about-menu-name">{textObj[languageState].name}</div>
          <div className="about-menu-desc">{textObj[languageState].desc}</div>
        </div>
        <div className="about-menu-img">
          <img src={profPicture} alt="personImage" />
        </div>
      </div>
    </div>
  );
};
