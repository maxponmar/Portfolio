import './Header.scss'
import HeaderLink from './HeaderLink/HeaderLink'

function Header() {
  const sections = [
    { title: "Home", link: '#home' },
    { title: "About", link: '#About' },
    { title: "Skills", link: '#Skills' },
    { title: "Projects", link: '#Projects' },
    { title: "Contact", link: '#Contact' },
  ];

  return (
    <div>
      <header class="header">
        <nav class="navigation">
          <div class="navigation__logo-box">
            <a href="#" class="navigation__logo-link">
              <h1>Maximiliano Ponce Marquez</h1>
            </a>
          </div>
          <input type="checkbox" class="navigation__nav--checkbox" id="navi-toggle" />
          <label for="navi-toggle" class="navigation__nav--button">
            <span class="navigation__nav--icon">&nbsp;</span>
          </label>
          <div class="navigation__nav-menu">
            {
              sections.map(section => {
                return <HeaderLink title={section.title} link={section.link} />
              })
            }
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;