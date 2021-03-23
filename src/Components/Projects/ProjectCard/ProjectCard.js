import './ProjectCard.scss';
import GithubIcon from '../../../Assets/SVG/github.svg';


const ProjectCard = ({title, image, link}) => {
  return (
    <div class="projects__card">
      <img
        src={image}
        alt={title} class="projects__card--img" />
      <div class="projects__card--data">
        <a href={link} class="projects__card--link">
          <img src={GithubIcon} alt="Github" class="projects__card--icon" />
        </a>
        <span class="projects__card--title">{title}</span>
      </div>
    </div>
  );
}

export default ProjectCard;