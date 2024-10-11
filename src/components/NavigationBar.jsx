import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "../styles/NavigationBar.css";
import anubisImage from "../assets/logo.png";

function NavigationBar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
    }
  };

  return (
    <header className="navbar">
      <img src={anubisImage} alt="Your Name" className="navbar-image" />
      <nav>
        <button onClick={toggleTheme} className="navbar-theme-button">
          {isDarkMode ? (
            <FaSun className="navbar-theme-icon" />
          ) : (
            <FaMoon className="navbar-theme-icon" />
          )}
        </button>
      </nav>
    </header>
  );
}

export default NavigationBar;
