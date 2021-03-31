import './Header.scss'
import HeaderLink from './HeaderLink/HeaderLink'

function Header({title}) {
  const sections = [
    { title: "Home", link: '#' },
    { title: "About", link: '#about' },
    { title: "Skills", link: '#skills' },
    { title: "Projects", link: '#projects' },
    { title: "Contact", link: '#contact' },
  ];

  return (
    <header className="header">
      <nav className="navigation">
        <div className="navigation__logo-box">
          <a href="#" className="navigation__logo-link">
            <h1>{title}</h1>
          </a>
        </div>
        <input type="checkbox" className="navigation__nav--checkbox" id="navi-toggle" />
        <label htmlFor="navi-toggle" className="navigation__nav--button">
          <span className="navigation__nav--icon">&nbsp;</span>
        </label>
        <div className="navigation__nav-menu">
          {
            sections.map(section => {
              return <HeaderLink key={section.title} title={section.title} link={section.link} />
            })
          }
        </div>
      </nav>
    </header>
  );
}

export default Header;
