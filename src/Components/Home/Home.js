import './Home.scss';
import profileImage from '../../Assets/Images/profile.png';

function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__img">
        <img src={profileImage} alt="Maximiliano Ponce Marquez" />
      </div>
      <div className="home__presentation">
        <h1 className="home__presentation--title">Maximiliano Ponce Marquez</h1>
        <p className="home__presentation--description">
          Mechatronics Engineer & Web Developer
        </p>
        <div className="button">
          <a href="#contact">Contact</a>
        </div>
      </div>
    </section>
  )
}

export default Home;