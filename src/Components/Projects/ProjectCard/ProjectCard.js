import './ProjectCard.scss';
import GithubIcon from '../../../Assets/SVG/github.svg';


const ProjectCard = ({title, image, link}) => {
  return (
    <div className="projects__card">
      <img
        src={image}
        alt={title} className="projects__card--img" />
      <div className="projects__card--data">
        <a href={link} className="projects__card--link">
          <img src={GithubIcon} alt="Github" className="projects__card--icon" />
        </a>
        <span className="projects__card--title">{title}</span>
      </div>
    </div>
  );
}

export default ProjectCard;
