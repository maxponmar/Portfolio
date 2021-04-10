import "./Button.scss";

const Button = ({ title, link }) => {
  return (
    <div
      className="button"
      onClick={() => {
        document.querySelector(link).scrollIntoView();
      }}
    >
      <button>{title}</button>
    </div>
  );
};

export default Button;
