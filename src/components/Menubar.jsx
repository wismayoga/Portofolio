// Menubar.jsx

import "../styles/Menubar.css";
import PropTypes from "prop-types";

function Menubar({ activeSection, setActiveSection }) {
  return (
    <div className="menubar">
      <ul>
        <li>
          <button
            className={activeSection === "feed" ? "active" : ""}
            onClick={() => setActiveSection("feed")}
          >
            Feed
          </button>
        </li>
        <li>
          <button
            className={activeSection === "about" ? "active" : ""}
            onClick={() => setActiveSection("about")}
          >
            About
          </button>
        </li>
        <li>
          <button
            className={activeSection === "project" ? "active" : ""}
            onClick={() => setActiveSection("project")}
          >
            Project
          </button>
        </li>
        <li>
          <button
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => setActiveSection("contact")}
          >
            Contact
          </button>
        </li>
      </ul>
    </div>
  );
}

Menubar.propTypes = {
  setActiveSection: PropTypes.func.isRequired,
  activeSection: PropTypes.string.isRequired,
};

export default Menubar;
