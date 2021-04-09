import "./ThemeToggler.scss";

import { useEffect } from "react";

import sun from "../../Assets/SVG/sunny.svg";
import moon from "../../Assets/SVG/half-moon.svg";

const root = document.querySelector(":root");
let sunIcon = document.querySelector(".sun");
let moonIcon = document.querySelector(".moon");

const setDarkTheme = function () {
  root.style.setProperty("--color-primary", "#798777");
  root.style.setProperty("--color-white", "#010101");
  root.style.setProperty("--color-black", "#bbe1fa");
  root.style.setProperty("--color-grey-light", "#222");
  root.style.setProperty("--color-icons", "#bbe1fa");
  moonIcon.classList.remove("hidden");
  sunIcon.classList.add("hidden");
};

const setLightTheme = function () {
  root.style.setProperty("--color-primary", "#19456b");
  root.style.setProperty("--color-white", "#eee");
  root.style.setProperty("--color-black", "#23120b");
  root.style.setProperty("--color-grey-light", "#e2e2e2");
  root.style.setProperty("--color-icons", "#eee");
  moonIcon.classList.add("hidden");
  sunIcon.classList.remove("hidden");
};

function ThemeToggler() {
  useEffect(() => {
    sunIcon = document.querySelector(".sun");
    moonIcon = document.querySelector(".moon");
  });
  return (
    <div className="theme-toggler">
      <img
        className="theme-toggler__icon sun "
        src={sun}
        onClick={setDarkTheme}
        alt="sun"
      />
      <img
        className="theme-toggler__icon moon hidden"
        src={moon}
        onClick={setLightTheme}
        alt="moon"
      />
    </div>
  );
}

export default ThemeToggler;
