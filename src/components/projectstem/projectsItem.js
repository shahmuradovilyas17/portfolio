import inkHouseImg from "../../assets/images/inkHouse.png";
import furnikingImg from "../../assets/images/Furniking.png";
import githubLightImg from "../../assets/images/github.png";
import githubDarkImg from "../../assets/images/github-dark.png";
import "./projectsItem.scss";
import { useContext } from "react";
import { MainContext } from "../MainContext/MainContext";

export const ProjectsItem = () => {
  const projects = [
    {
      id: 1,
      name: "InkHouse-React",
      githubLink: "https://github.com/shahmuradovilyas17/pticka",
      desc: {
        EN: "online store selling paintings from countries such as France, Germany and England",
        AZ: "Fransa, Almaniya və İngiltərə kimi ölkələrdən rəsmlər satan onlayn mağaza",
        RU: "онлайн-магазин, продающий картины из стран, таких как Франция, Германия и Англия",
      },
      img: inkHouseImg,
    },
    {
      id: 2,
      name: "Furniking",
      githubLink:
        "https://github.com/shahmuradovilyas17/StepIt/tree/main/Furniking",
      desc: {
        EN: "online store selling various home furniture",
        AZ: "Müxtəlif ev mebeli satan onlayn mağaza",
        RU: "онлайн-магазин, продающий различную домашнюю мебель",
      },
      img: furnikingImg,
    },
  ];

  const { textObj, languageState, themeState } = useContext(MainContext);

  return (
    <>
      {projects.map((item) => {
        return (
          <div className="projects-item" key={item.id}>
            <img src={item.img} alt={item.name} className="project-image" />
            <div className="projects-item-name">{item.name}</div>
            <div className="projects-item-desc">{item.desc[languageState]}</div>
            <a href={item.githubLink}>
              <img
                src={themeState ? githubDarkImg : githubLightImg}
                alt="githubLink"
              />
            </a>
          </div>
        );
      })}
    </>
  );
};
