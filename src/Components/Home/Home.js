import './Home.scss';

import Section from '../../Shared/Section/Section';
import HomeImage from './HomeImage/HomeImage';
import HomePresentation from './HomePresentation/HomePresentation';

function Home() {
  return (
    <Section name="home">
      <HomeImage />
      <HomePresentation />
    </Section>
  )
}

export default Home;