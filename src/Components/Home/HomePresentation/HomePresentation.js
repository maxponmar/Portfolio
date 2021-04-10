import './HomePresentation.scss';
import Button from '../../Button/Button';

const HomePresentation = ({ name, description }) => {
  return (
    <div className="home__presentation">
      <h1 className="home__presentation--title">{name}</h1>
      <p className="home__presentation--description">
        {description}
      </p>
      <Button title='Contact' link='#contact' />
    </div>
  );
}

export default HomePresentation;
