import './AboutInformation.scss';

import AboutInformationData from './AboutInformationData/AboutInformationData';

import UserIcon from '../../../Assets/SVG/user.svg';
import EnvelopeIcon from '../../../Assets/SVG/envelop.svg';
import GithubIcon from '../../../Assets/SVG/github.svg';

const AboutInformation = () => {

  const aboutData = [
    { icon: UserIcon, data: 'Maximiliano Ponce Marquez' },
    { icon: EnvelopeIcon, data: 'maxponce.marquez@gmail.com'},
    { icon: GithubIcon, data: 'maxponmar'}
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