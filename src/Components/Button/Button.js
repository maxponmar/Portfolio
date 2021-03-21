import './Button.scss';

const Button = ({ title, link }) => {
  return (
    <div className="button">
      <a href={link}>{title}</a>
    </div>
  )
}

export default Button;