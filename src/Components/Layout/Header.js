import './Header.css'

function Header() {
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
            <ul class="navigation__nav-menu--list">
              <li class="navigation__nav-menu--item">
                <a href="#home" class="navigation__nav-menu--link">Home</a>
              </li>
            </ul>
            <ul class="navigation__nav-menu--list">
              <li class="navigation__nav-menu--item">
                <a href="#about" class="navigation__nav-menu--link">About</a>
              </li>
            </ul>
            <ul class="navigation__nav-menu--list">
              <li class="navigation__nav-menu--item">
                <a href="#skills" class="navigation__nav-menu--link">Skills</a>
              </li>
            </ul>
            <ul class="navigation__nav-menu--list">
              <li class="navigation__nav-menu--item">
                <a href="#projects" class="navigation__nav-menu--link">Projects</a>
              </li>
            </ul>
            <ul class="navigation__nav-menu--list">
              <li class="navigation__nav-menu--item">
                <a href="#contact" class="navigation__nav-menu--link">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;