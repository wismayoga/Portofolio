import "../styles/Feed1.css"; // Import Feed specific styles
import { FaThumbtack, FaHeart, FaShare } from "react-icons/fa";
import PropTypes from "prop-types";

function Feed1({
  profileImage,
  pinned,
  name,
  date,
  tag,
  title,
  description,
  postImage,
}) {
  return (
    <div className="feed1">
      <div className="feed1-post">
        {pinned && (
          <div className="feed1-post-header">
            <FaThumbtack className="feed1-pin-icon" /> <span>Pinned Cheep</span>
          </div>
        )}
        <div className="feed1-post-body">
          <img
            src={profileImage}
            alt="feed1-post-Profile"
            className="feed1-post-profile-image"
          />
          <div className="feed1-post-content">
            <div className="feed1-post-row">
              <span className="feed1-post-name">{name}</span>
              <span className="feed1-post-date">• {date}</span>
            </div>
            <div className="feed1-post-row">
              <span className="feed1-post-tag">{tag}</span>
            </div>
            <div className="feed1-post-row">
              <h3 className="feed1-post-title">{title}</h3>
            </div>
            <div className="feed1-post-row">
              <p className="feed1-post-description">{description}</p>
            </div>
            <div className="feed1-post-row">
              <img src={postImage} alt="Post" className="feed1-post-image" />
            </div>
            <div className="feed1-post-actions">
              <FaHeart className="feed1-action-icon" />
              <FaShare className="feed1-action-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Feed1.propTypes = {
  profileImage: PropTypes.string.isRequired,
  pinned: PropTypes.bool,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  postImage: PropTypes.string.isRequired,
};

export default Feed1;
