import './HeaderLink.scss'

function HeaderLink({ title, link }) {
  return (
    <ul class="navigation__nav-menu--list">
      <li class="navigation__nav-menu--item">
        <a href={ link } class="navigation__nav-menu--link">{ title }</a>
      </li>
    </ul>
  );
}

export default HeaderLink;