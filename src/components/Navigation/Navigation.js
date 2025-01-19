import { Link } from "react-router-dom";
import "./Navigation.scss";
import { useContext } from "react";
import { MainContext } from "../MainContext/MainContext";

export const Navigation = () => {
  const { textObj, languageState } = useContext(MainContext);

  return (
    <ul className="navigation-items">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <li className="navigation-item">{textObj[languageState].home}</li>
      </Link>
      <Link to={"/about"} style={{ textDecoration: "none" }}>
        <li className="navigation-item">{textObj[languageState].about}</li>
      </Link>
      <Link to={"/projects"} style={{ textDecoration: "none" }}>
        <li className="navigation-item">{textObj[languageState].projects}</li>
      </Link>
      <Link to={"/contact"} style={{ textDecoration: "none" }}>
        <li className="navigation-item">{textObj[languageState].contact}</li>
      </Link>
    </ul>
  );
};
