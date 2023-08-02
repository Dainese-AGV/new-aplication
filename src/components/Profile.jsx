import React from "react";
import content from "../image/content.jpg";
import sun from "../image/sun.jpg";
import "./Profile.css"

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img src={content} alt="content"></img>
      </div>
      <div>
        <img src={sun} alt="sun"></img>
      </div>
      <div>ava+ discription</div>
      <div>
        My posts
        <div>New post</div>
        <div>
          <div>Post 1</div>
          <div>Post 2</div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
