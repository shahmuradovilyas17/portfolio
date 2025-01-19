import "./projects.scss";
import { ProjectsItem } from "../projectstem/projectsItem";
import { useContext } from "react";
import { MainContext } from "../MainContext/MainContext";

export const ProjectsMenu = () => {
  const { themeState, languageState, textObj } = useContext(MainContext);

  return (
    <div className="projects-menu-wrapper" id={themeState ? "dark" : "light"}>
      <div className="projects-menu-inner">
        <div className="projects-menu-title">
          {textObj[languageState].projects}
        </div>
        <div className="projects-menu-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </div>
        <ProjectsItem />
      </div>
    </div>
  );
};
