import React from "react";
import content from "/New-aplication/index/src/image/content.jpg";
import sun from "/New-aplication/index/src/image/sun.jpg";
import "./Profile.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img src={sun} alt="sun"></img>
      </div>
      <div>ava+ discription</div>
      <MyPosts/>
    </div>
  );
};
export default Profile;
