import './AboutInformationData.scss';

const AboutInformationData = (props) => {
  return (
    <div className="about__information--data">
        <img src={props.icon} alt="User" className="about__information--icon" />
        <span>{props.data}</span>
      </div>
  );
}

export default AboutInformationData;