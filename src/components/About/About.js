import "./About.scss";
import image from "../../assets/images/AboutImg.jpg"

export const About = () => {
  return (
    <div className="about-menu-wrapper">
      <div className="about-menu-inner">
        <div className="about-menu-content">
          <div className="about-menu-name">Your Name Here</div>
          <div className="about-menu-desc">
            about text: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </div>
        </div>
        <img src={image} alt="personImage" />
      </div>
    </div>
  );
};
