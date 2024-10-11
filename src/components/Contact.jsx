import "../styles/Contact.css"; // Import Contact specific styles
import {
  FaWhatsapp,
  FaInstagram,
  FaGithub,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
// import gifImage from "../assets/profile.jpeg";

function Contact() {
  return (
    <div className="contact">
      <h1 className="contact-title">Contact me</h1>
      <p className="contact-description">You can reach me through:</p>

      <ul className="contact-list">
        <li>
          <FaWhatsapp className="contact-icon" />
          <a
            href="https://wa.me/6282146930640"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>+6282146930640</span>
          </a>
        </li>
        <li>
          <FaEnvelope className="contact-icon" />
          <a
            href="https://wa.me/6282146930640"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>wismayoga15@gmail.com</span>
          </a>
        </li>
        <li>
          <FaInstagram className="contact-icon" />
          <a
            href="https://www.instagram.com/pergihari"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>@pergihari</span>
          </a>
        </li>
        <li>
          <FaGithub className="contact-icon" />
          <a
            href="https://github.com/wismayoga"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>github.com/wismayoga</span>
          </a>
        </li>
        <li>
          <FaMapMarkerAlt className="contact-icon" />
          <a
            href="https://www.google.com/maps?q=Singaraja,+Bali,+Indonesia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Desa Gobleg, Kec. Banjar, Kab. Buleleng, Bali (81152)</span>
          </a>
        </li>
      </ul>

      {/* <div className="contact-gif">
        <img src={gifImage} alt="Contact GIF" />
      </div> */}
    </div>
  );
}

export default Contact;
