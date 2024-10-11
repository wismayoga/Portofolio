import "../styles/About.css";
import profileImage from "../assets/profile.png"; // Adjust the path to your image
// import signatureImage from "../assets/sign.png";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaLaravel,
  FaCode,
  FaWhatsapp,
} from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { LiaSchoolSolid } from "react-icons/lia";
import { LuSchool } from "react-icons/lu";
import { GrCloudComputer } from "react-icons/gr";

function About() {
  return (
    <div className="about">
      <h1 className="about-title">What&apos;s Up 👋</h1>
      {/* <p>
        I&apos;m Wisma. I&apos;m a web developer that thrives on bringing ideas
        to life with code!
      </p> */}
      <p>
        I&apos;m Wisma, a passionate web and mobile app developer, committed to
        turning innovative ideas into dynamic and interactive digital
        experiences. Every line of code I write is a step toward creating
        something that makes a difference. Let&apos;s build something awesome
        together!
      </p>
      <img src={profileImage} alt="Profile" className="about-profile-image" />
      <p>
        Below are some of the key skills that empower me to bring creative
        solutions to life in the world of software development:
      </p>
      {/* Skill Card */}
      <div className="skill-card">
        <div className="skill">
          <p>
            <FaHtml5 /> HTML
          </p>
          <div className="skill-bar">
            <div className="skill-percentage html"></div>
          </div>
        </div>

        <div className="skill">
          <p>
            <FaCss3Alt /> CSS
          </p>
          <div className="skill-bar">
            <div className="skill-percentage css"></div>
          </div>
        </div>

        <div className="skill">
          <p>
            <FaCode /> Dart
          </p>
          <div className="skill-bar">
            <div className="skill-percentage dart"></div>
          </div>
        </div>

        <div className="skill">
          <p>
            <FaReact /> React JS
          </p>
          <div className="skill-bar">
            <div className="skill-percentage react"></div>
          </div>
        </div>

        <div className="skill">
          <p>
            <FaLaravel /> Laravel (Backend)
          </p>
          <div className="skill-bar">
            <div className="skill-percentage laravel"></div>
          </div>
        </div>
      </div>
      <p>
        Here&apos;s a glimpse into my educational journey that has shaped me
        into I am today:
      </p>
      {/* Education Timeline */}
      <div className="about-timeline">
        <div className="about-timeline-container about-timeline-right">
          <div className="about-timeline-date">2019-2024</div>
          <GiGraduateCap className="about-timeline-icon" />
          <div className="about-timeline-content">
            <h2 className="about-timeline-content-title">
              S1 Computer Science
            </h2>
            <p>Universitas Pendidikan Ganesha</p>
          </div>
        </div>
        <div className="about-timeline-container about-timeline-left">
          <div className="about-timeline-date">2016-2019</div>
          <GrCloudComputer className="about-timeline-icon" />
          <div className="about-timeline-content about-timeline-content-left">
            <h2>Network Engineering</h2>
            <p>SMK N 3 Singaraja</p>
          </div>
        </div>
        <div className="about-timeline-container about-timeline-right">
          <div className="about-timeline-date">2013-2016</div>
          <LuSchool className="about-timeline-icon" />
          <div className="about-timeline-content">
            <h2>Junior High School</h2>
            <p>SMP N 2 Banjar</p>
          </div>
        </div>
        <div className="about-timeline-container about-timeline-left">
          <div className="about-timeline-date">2007-2013</div>
          <LiaSchoolSolid className="about-timeline-icon" />
          <div className="about-timeline-content  about-timeline-content-left">
            <h2>Elementy School</h2>
            <p>SD N 6 Gobleg</p>
          </div>
        </div>
      </div>

      {/* Contact Button */}
      <div className="contact-button">
        <a
          href="https://wa.me/+6282146930640"
          target="_blank"
          rel="noopener noreferrer"
          className="about-whatsapp-button"
        >
          <FaWhatsapp className="about-whatsapp-icon" /> Contact Me on WhatsApp
        </a>
      </div>
      <p className="about-signature-text">
        <strong>Keep innovating and stay awesome! 🚀</strong>
      </p>
    </div>
  );
}

export default About;
