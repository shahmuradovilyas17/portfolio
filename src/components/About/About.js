import "./About.scss";
import profPicture from "../../assets/images/ProfilePicture.png";
import { MainContext } from "../MainContext/MainContext";
import { useContext } from "react";

export const About = () => {
  const { themeState } = useContext(MainContext);

  return (
    <div className="about-menu-wrapper" id={themeState ? "dark" : "light"}>
      <div className="about-menu-inner">
        <div className="about-menu-content">
          <div className="about-menu-name">Shakhmuradov Ilyas</div>
          <div className="about-menu-desc">
            FrontEnd Developer. Student in National Aviation Academy of
            Azerbaijan
          </div>
        </div>
        <div className="about-menu-img">
          <img src={profPicture} alt="personImage" />
        </div>
      </div>
    </div>
  );
};
