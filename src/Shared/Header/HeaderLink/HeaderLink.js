import './HeaderLink.scss'

function HeaderLink({ title, id }) {
  return (
    <ul className="navigation__nav-menu--list">
      <li className="navigation__nav-menu--item">        
        <button className="navigation__nav-menu--link" onClick={() => {
          document.querySelector(id).scrollIntoView()
        }}>{ title }</button>
      </li>
    </ul>
  );
}

export default HeaderLink;