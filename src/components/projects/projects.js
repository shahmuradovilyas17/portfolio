import "./projects.scss"
import { ProjectsItem } from '../projectstem/projectsItem';

export const ProjectsMenu = () => {
    return (
        <div className="projects-menu-inner">
            <div className="projects-menu-title">Projects</div>
            <div className="projects-menu-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
            <ProjectsItem/>
        </div>
    )
}