import "../styles/Header.css";
import image from "../assets/header1.jpeg";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";
import { BsBagCheck } from "react-icons/bs";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { MdDateRange } from "react-icons/md";
import profileImage from "../assets/profile.png";
import { FaCheckCircle } from "react-icons/fa";

function Header() {
  return (
    <div>
      <div className="header-image-container">
        <img src={image} alt="Header Image" className="header-image" />
      </div>
      <div className="header-container">
        <div className="header-button-container">
          <button className="header-button">
            Instagram <FaInstagram className="header-button-icon" />
          </button>
        </div>
        <div className="header-profile-container">
          <img
            src={profileImage}
            alt="header-Profile"
            className="header-profile-image"
          />
        </div>
        <div className="header-name-container">
          <p className="header-name">
            Putu Gede Wisma Yoga
            <FaCheckCircle className="verified-icon" />
          </p>
          <p className="header-title">Balinese🌴</p>
          <p className="header-description">
            Web Dev. Mobile Apps Dev. Tech Enthusiast. Traveller
          </p>
          <p className="header-spesification">
            <span className="header-spesification-text">
              <BsBagCheck className="header-spesification-icon" /> Available
            </span>

            <span className="header-spesification-text header-spesification-text-phone">
              <MdOutlineLocalPhone className="header-spesification-icon header-spesification-icon-phone " />{" "}
              <a
                href="https://wa.me/+6282146930640"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </span>

            <span className="header-spesification-text">
              <LiaBirthdayCakeSolid className="header-spesification-icon" />{" "}
              Sept 15th
            </span>

            <span className="header-spesification-text">
              <MdDateRange className="header-spesification-icon" /> Joined Jan
              2021
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
