import './Projects.scss';
import Section from "../../Shared/Section/Section";
import ProjectCard from './ProjectCard/ProjectCard';

import { projects } from "../../Data/userData";

const Projects = () => {
  return (
    <Section title='Projects' subtitle='My Portfolio'>
      <div class="projects__container">
        <div class="projects__cards-container">
          {
            projects.map(project => {
              return <ProjectCard
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