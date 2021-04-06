import './ThemeToggler.scss';

import sun from '../../Assets/SVG/sunny.svg';
import moon from '../../Assets/SVG/half-moon.svg';


function ThemeToggler() {
  return (
    <div className='theme-toggler'>
      <img className='theme-toggler__icon' src={sun}/>
      <img className='theme-toggler__icon hidden' src={moon}/>
    </div>
  )
}

export default ThemeToggler;
