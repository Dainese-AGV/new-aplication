import React from "react";
import content from "../image/content.jpg";
import sun from "../image/sun.jpg";

const Profile = () => {
  <div className="content">
    <div>
      <img src={content} width="100%" alt="content"></img>
    </div>
    <div>
      <img src={sun} alt="sun"></img>
    </div>
    <div>ava+ discription</div>
    <div>
      My posts
      <div>New post</div>
      <div>Post 1</div>
      <div>Post 2</div>
    </div>
  </div>;
};
export default Profile;
