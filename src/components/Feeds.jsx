import Feed1 from "./Feed1";
import Feed2 from "./Feed2";
import profileImage from "../assets/profile.png";
import postImage from "../assets/foto1.png";
import postImage2 from "../assets/foto2.jpg";
// import videoSrc from "../assets/kungfu.mp4";

function Feeds() {
  return (
    <div className="feeds">
      <Feed1
        profileImage={profileImage}
        pinned={true}
        name="Wisma ✨"
        date="14 Feb 2024"
        tag="Fresh🌊"
        title="Cleening my setup"
        description="It feels comfortable if the computer setup is not messy😎."
        postImage={postImage2}
      />
      <Feed2
        profileImage={profileImage}
        pinned={true}
        name="Wisma ✨"
        date="20 Dec 2023"
        tag="Excited😃"
        title="Testing app"
        description="Today, I tested the Sispamdes app which is used by plumber in the village"
        postImage={postImage}
        location="Kayuputih, Banjar"
      />
    </div>
  );
}

export default Feeds;
