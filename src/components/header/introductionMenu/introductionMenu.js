import { TopNavigation } from "../top-navigation/topNavigation";
import "./introductionMenu.scss";
import image from "../../../assets/images/introductionMenuImage.jpg"

export const IntroductionMenu = () => {
  return (
    <div className="introduction-menu-wrapper">
      <TopNavigation />
      <div className="introduction-menu-inner">
        <div className="introduction-menu-content">
          <div className="intro-menu-name">Your Name Here</div>
          <div className="intro-menu-desc">
            Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </div>
          <button className="intro-menu-button">Let`s get started</button>
        </div>
        <img src={image} alt="personImage" />
      </div>
    </div>
  );
};
