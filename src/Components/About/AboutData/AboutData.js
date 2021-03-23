import './AboutData.scss';

const AboutData = ({aboutMe}) => {
  return (
    <div className="about__data">
      <p className="about__data--description">
        {aboutMe}
      </p>
    </div>
  );
}

export default AboutData;