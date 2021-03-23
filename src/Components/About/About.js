import './About.scss';

import Section from '../../Shared/Section/Section';
import AboutData from './AboutData/AboutData';
import AboutImage from './AboutImage/AboutImage';
import AboutInformation from './AboutInformation/AboutInformation';

const About = ({profile}) => {
  return (
    <Section title='About' subtitle='My Intro'>
      <div className="about__container">
        <AboutData aboutMe={profile.aboutMe} />
        <AboutImage image={profile.aboutImage} name={profile.name} />
        <AboutInformation name={profile.name} email={profile.email} github={profile.github} />
      </div>
    </Section>
  )
}

export default About;