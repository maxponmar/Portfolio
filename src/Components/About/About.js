import './About.scss';

import Section from '../../Shared/Section/Section';
import AboutData from './AboutData/AboutData';
import AboutImage from './AboutImage/AboutImage';
import AboutInformation from './AboutInformation/AboutInformation';

const About = () => {
  return (
    <Section name='about' title='About Me' subtitle='My Intro'>
      <div className="about__container">
        <AboutData />
        <AboutImage/>
        <AboutInformation />
      </div>
    </Section>
  )
}

export default About;