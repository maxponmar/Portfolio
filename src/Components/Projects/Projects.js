import './Projects.scss';
import Section from "../../Shared/Section/Section";
import ProjectCard from './ProjectCard/ProjectCard';

import { projects } from "../../Data/userData";

const Projects = () => {
  return (
    <Section title='Projects' subtitle='My Portfolio'>
      <div className="projects__container">
        <div className="projects__cards-container">
          {
            projects.map(project => {
              return <ProjectCard
                key={project.title}
                title={project.title}
                link={project.link}
                image={project.image} />
            })
          }
        </div>
      </div>
    </Section>
  )
}

export default Projects;
