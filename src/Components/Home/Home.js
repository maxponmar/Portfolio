import './Home.scss';

import Section from '../../Shared/Section/Section';
import HomeImage from './HomeImage/HomeImage';
import HomePresentation from './HomePresentation/HomePresentation';

const Home = ({name, image, description}) => {
  return (
    <Section title="home">
      <HomeImage name={name} image={image}/>
      <HomePresentation name={name} description={description}/>
    </Section>
  )
}

export default Home;
