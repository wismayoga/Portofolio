import "../styles/Projects.css"; // Import Project specific styles
import { useState } from "react";
import PropTypes from "prop-types";

import projectImage1_1 from "../assets/ProjectList/11.png";
import projectImage1_2 from "../assets/ProjectList/12.jpg";
import projectImage1_3 from "../assets/ProjectList/13.jpg";
import projectImage2_1 from "../assets/ProjectList/21.jpg";
import projectImage2_2 from "../assets/ProjectList/22.jpg";
import projectImage2_3 from "../assets/ProjectList/23.jpg";
import projectImage3_1 from "../assets/ProjectList/31.jpg";
import projectImage3_2 from "../assets/ProjectList/32.jpg";
import projectImage3_3 from "../assets/ProjectList/33.jpg";

function ImageSlideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goToNextImage = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setTransitioning(false);
    }, 0); // Match the transition duration in CSS
  };

  const goToPreviousImage = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
      setTransitioning(false);
    }, 0); // Match the transition duration in CSS
  };

  return (
    <div className="slideshow-container">
      <div
        className={`slideshow-image-wrapper ${
          transitioning ? "transition" : ""
        }`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="slideshow-image"
          />
        ))}
      </div>
      <button className="slideshow-button prev" onClick={goToPreviousImage}>
        &#10094;
      </button>
      <button className="slideshow-button next" onClick={goToNextImage}>
        &#10095;
      </button>
      <div className="slideshow-bullets">
        {images.map((_, index) => (
          <span
            key={index}
            className={`slideshow-bullet ${
              currentIndex === index ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

ImageSlideshow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function Projects() {
  const projectImages1 = [projectImage1_1, projectImage1_2, projectImage1_3];
  const projectImages2 = [projectImage2_1, projectImage2_2, projectImage2_3];
  const projectImages3 = [projectImage3_1, projectImage3_2, projectImage3_3];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <p>Here are some of the projects I&apos;ve worked on.</p>

      <div className="project-section">
        <h2>SISPAM-Des Mobile App</h2>
        <ImageSlideshow images={projectImages1} />
        <p>
          A software used by villages to independently manage their water
          systems. This app is used for data collection and to manage the
          village water management system.
        </p>
      </div>

      <div className="project-section">
        <h2>Decision Support System Website</h2>
        <ImageSlideshow images={projectImages2} />
        <p>
          A system designed to assist in determining which customers are
          eligible for loans at the cooperative.
        </p>
      </div>

      <div className="project-section">
        <h2>Driver Services Booking Website</h2>
        <ImageSlideshow images={projectImages3} />
        <p>
          A web application for booking driver services, targeted at tourists.
        </p>
      </div>
    </div>
  );
}

export default Projects;
