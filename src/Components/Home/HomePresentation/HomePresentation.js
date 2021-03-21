import './HomePresentation.scss';
import Button from '../../Button/Button';

const HomePresentation = () => {

  const title = "Maximiliano Ponce Marquez";
  const description = "Mechatronics Engineer & Web Developer";
  
  return (
    <div className="home__presentation">
      <h1 className="home__presentation--title">{ title }</h1>
      <p className="home__presentation--description">
        { description }
      </p>
      <Button title='Contact' link='#contact' />
    </div>
  );
}

export default HomePresentation;