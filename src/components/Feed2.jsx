import "../styles/Feed2.css"; // Import Feed specific styles
import { FaHeart, FaShare, FaMapMarkerAlt } from "react-icons/fa";
import PropTypes from "prop-types";

function Feed2({
  profileImage,
  name,
  date,
  tag,
  title,
  description,
  // videoSrc,
  postImage,
  location,
}) {
  return (
    <div className="feed2">
      <div className="feed2-post">
        <div className="feed2-post-body">
          <img
            src={profileImage}
            alt="feed2-post-Profile"
            className="feed2-post-profile-image"
          />
          <div className="feed2-post-content">
            <div className="feed2-post-row">
              <span className="feed2-post-name">{name}</span>
              <span className="feed2-post-date">• {date}</span>
            </div>
            <div className="feed2-post-row">
              <span className="feed2-post-tag">{tag}</span>
            </div>
            <div className="feed2-post-row">
              <h3 className="feed2-post-title">{title}</h3>
            </div>
            <div className="feed2-post-row">
              <p className="feed2-post-description">{description}</p>
            </div>
            {/* <div className="feed2-post-row">
              <video controls className="feed2-post-video">
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div> */}
            <div className="feed2-post-row">
              <img src={postImage} alt="Post" className="feed1-post-image" />
            </div>
            <div className="feed2-post-location">
              <FaMapMarkerAlt className="feed2-location-icon" /> {location}
            </div>
            <div className="feed2-post-actions">
              <FaHeart className="feed2-action-icon" />
              <FaShare className="feed2-action-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Feed2.propTypes = {
  profileImage: PropTypes.string.isRequired,
  pinned: PropTypes.bool,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // videoSrc: PropTypes.string.isRequired,
  postImage: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Feed2;
