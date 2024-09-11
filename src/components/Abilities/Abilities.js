import SkillBar from "react-skillbars";
import "./Abilities.scss";

export const Abilities = () => {
  const skillList = [
    { type: "HTML", level: 80 },
    { type: "CSS", level: 60 },
    { type: "SCSS", level: 60 },
    { type: "Javascript", level: 70 },
    { type: "React", level: 40 },
    { type: "Angular", level: 0 },
  ];

  const colors = {
    bar: "#FF0000",
    title: {
      text: "#fff",
      background: "#cd2a2a",
    },
  };

  return (
    <>
      <div className="abilities-inner">
        <div className="abilities-title">Skills</div>
        <SkillBar
          skills={skillList}
          height={30}
          colors={colors}
          symbolColor={"#3498db"}
        />
      </div>
    </>
  );
};
