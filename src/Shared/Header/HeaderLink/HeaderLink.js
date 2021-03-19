import './HeaderLink.scss'

function HeaderLink({ title, link }) {
  return (
    <ul className="navigation__nav-menu--list">
      <li className="navigation__nav-menu--item">
        <a href={ link } className="navigation__nav-menu--link">{ title }</a>
      </li>
    </ul>
  );
}

export default HeaderLink;