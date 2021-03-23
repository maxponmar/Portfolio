import './HomeImage.scss';

const HomeImage = ({image, name}) => {
  return (
    <div className="home__img">
        <img src={image} alt={name} />
    </div>
  );
}

export default HomeImage;