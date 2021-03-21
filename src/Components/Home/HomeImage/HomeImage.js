import './HomeImage.scss';

import profileImage from '../../../Assets/Images/profile.png';

const HomeImage = () => {
  return (
    <div className="home__img">
        <img src={profileImage} alt="Maximiliano Ponce Marquez" />
    </div>
  );
}

export default HomeImage;