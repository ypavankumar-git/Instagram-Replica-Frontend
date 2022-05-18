import React from "react";
import "./profile.css";
import man from "../../assets/man.png";
import profileSettings from "../../assets/profileSettings.svg";

function Profile() {
  return (
    <div className="profileContainer">
      <div className="profileInfo">
        <div className="profileImage">
          <img src={man} alt="profileimage" />
        </div>
        <div className="profileDetails">
          <div className="profileNameAndEditables">
            <p className="profileName">NewUser</p>
            <button className="editButton clickable">Edit Profile</button>
            <img className="clickable" src={profileSettings} alt="settings" />
          </div>
          <div className="profileCounts">
            <p className="postCount">
              <strong>0</strong> posts
            </p>
            <p className="followersCount">
              <strong>300</strong> followers
            </p>
            <p className="followingCount">
              <strong>300</strong> following
            </p>
          </div>
          <div className="profileDescription">
            <p className="fullname">NewUser</p>
            <p className="description">Software Engineer</p>
          </div>
        </div>
      </div>
      <div className="media" />
    </div>
  );
}

export default Profile;
