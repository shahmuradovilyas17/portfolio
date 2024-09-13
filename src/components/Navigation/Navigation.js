import { Link } from "react-router-dom";
import "./Navigation.scss";

export const Navigation = () => {
  return (
    <ul className="navigation-items">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <li className="navigation-item">Home</li>
      </Link>
      <Link to={"/about"} style={{ textDecoration: "none" }}>
        <li className="navigation-item">About</li>
      </Link>
      <Link to={"/projects"} style={{ textDecoration: "none" }}>
        <li className="navigation-item">Projects</li>
      </Link>
      <Link to={"/contact"} style={{ textDecoration: "none" }}>
        <li className="navigation-item">Contact</li>
      </Link>
    </ul>
  );
};
