import './AboutImage.scss';

const AboutImage = ({image, name}) => {
  return (
    <img src={image} alt={name} className="about__img" />
  );
}

export default AboutImage;