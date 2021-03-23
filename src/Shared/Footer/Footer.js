import './Footer.scss';
import githubIcon from '../../Assets/SVG/github.svg';

const Footer = ({name}) => {
  const currentTime = new Date()
  const year = currentTime.getFullYear();
  return (
    <footer class="footer">
    <div class="footer__container">
      <h2 class="footer--title">{name}</h2>
      <p class="footer--description">This is my personal website, welcome.</p>
      <div class="footer--social">
        <a href="https://github.com/maxponmar" class="footer--link">
          <img src={githubIcon} alt="Github" class="footer--icon" />
        </a>
      </div>
      <p class="footer--copy">&#169; {year} Copyright all rights reserved</p>
    </div>
  </footer>
  )
}

export default Footer;