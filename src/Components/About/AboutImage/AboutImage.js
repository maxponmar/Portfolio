import './AboutImage.scss';
import AboutImageSrc from '../../../Assets/Images/description.jpg';

const AboutImage = () => {
  return (
    <img src={AboutImageSrc} alt="Maximiliano Ponce Marquez" className="about__img" />
  );
}

export default AboutImage;