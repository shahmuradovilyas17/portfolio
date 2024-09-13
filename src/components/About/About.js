import "./About.scss";

export const About = () => {
  return (
    <div className="about-menu-wrapper">
      <div className="about-menu-inner">
        <div className="about-menu-content">
          <div className="about-menu-name">Shakhmuradov Ilyas</div>
          <div className="about-menu-desc">
            FrontEnd Developer. Student in National Aviation Academy of
            Azerbaijan
          </div>
        </div>
        <div className="about-menu-img">
          <img src alt="personImage" />
        </div>
      </div>
    </div>
  );
};
