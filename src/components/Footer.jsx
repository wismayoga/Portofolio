import "../styles/Footer.css";
import { FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a
          href="https://wa.me/+6282146930640"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="footer-icon" />
        </a>
        <a
          href="https://www.instagram.com/pergihari/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="footer-icon" />
        </a>
        <a
          href="https://github.com/wismayoga"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="footer-icon" />
        </a>
      </div>
      <p>wismayoga &copy; 2024</p>
    </footer>
  );
}

export default Footer;
