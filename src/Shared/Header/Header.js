import './Header.scss'
import HeaderLink from './HeaderLink/HeaderLink'

function Header({title}) {
  const sections = [
    { title: "Home", id: 'html' },
    { title: "About", id: '#about' },
    { title: "Skills", id: '#skills' },
    { title: "Projects", id: '#projects' },
    { title: "Contact", id: '#contact' },
  ];

  return (
    <header className="header">
      <nav className="navigation">
        <div className="navigation__logo-box">
          <button onClick={() => {
            document.querySelector('html').scrollIntoView()
          }} className="navigation__logo-link">
            <h1>{title}</h1>
          </button>
        </div>
        <input type="checkbox" className="navigation__nav--checkbox" id="navi-toggle" />
        <label htmlFor="navi-toggle" className="navigation__nav--button">
          <span className="navigation__nav--icon">&nbsp;</span>
        </label>
        <div className="navigation__nav-menu">
          {
            sections.map(section => {
              return <HeaderLink key={section.title} title={section.title} id={section.id} />
            })
          }
        </div>
      </nav>
    </header>
  );
}

export default Header;
