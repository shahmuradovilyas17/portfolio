import { Link } from "react-router-dom";
import "./topNavigation.scss";

export const TopNavigation = () => {
  return (
    <div className="top-nav-wrapper">
      <div className="top-nav-inner">
        <ul>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <li>Home</li>
          </Link>
          <Link to={"/about"} style={{ textDecoration: "none" }}>
            <li>About</li>
          </Link>
          <Link to={"/projects"} style={{ textDecoration: "none" }}>
            <li>Projects</li>
          </Link>
          <Link to={"/contact"} style={{ textDecoration: "none" }}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
