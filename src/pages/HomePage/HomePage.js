import { About } from "../../components/About/About";
import { ProjectsMenu } from "../../components/projects/projects";
import { Contact } from "../../components/contact/contact";
import { Introduction } from "../../components/Introduction/Introduction";

export const HomePage = () => {
  return (
    <>
      <Introduction />
      <About />
      <ProjectsMenu />
      <Contact />
    </>
  );
};
