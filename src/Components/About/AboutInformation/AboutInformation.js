import './AboutInformation.scss';

import AboutInformationData from './AboutInformationData/AboutInformationData';

import UserIcon from '../../../Assets/SVG/user.svg';
import EnvelopeIcon from '../../../Assets/SVG/envelop.svg';
import GithubIcon from '../../../Assets/SVG/github.svg';

const AboutInformation = ({name, email, github}) => {

  const aboutData = [
    { icon: UserIcon, data: name },
    { icon: EnvelopeIcon, data: email},
    { icon: GithubIcon, data: github}
  ]  
    
  return (
    <div className="about__information">
      <h3 className="about__information--title">Information</h3>
      {
        aboutData.map((item, index) => {
          return <AboutInformationData key={index} icon={item.icon} data={item.data} />
        })
      }
    </div>
  );
}

export default AboutInformation;