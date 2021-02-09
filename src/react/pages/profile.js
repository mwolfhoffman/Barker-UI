import React, { useState, useEffect } from "react";
import * as Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import Followers from "../components/follower";
import Posts from "../components/profile-posts";
import { useHistory } from "react-router-dom";

function Profile() {
  let [profile, setProfile] = useState(null);
  let { id } = useParams();
  const history = useHistory();

  useEffect(async () => {
    if (!profile || profile.id != id) {
      if (!id) {
        id = Cookies.get("user-id");
        if (!id) {
          history.push("/login");
        }
      }
      let res = await fetch("http://localhost:3000/api/profile/" + id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*/*",
          "Access-Token": Cookies.get("access-token"),
        },
      });
      let data = await res.json();
      console.log(data);
      setProfile((current) => (current = data));
    }
  });
  return (
    <>
      {profile ? (
        <>
          <div className="profile-header">
            <img src={profile.profile_pic} className="profile-pic" />
            <h1 className="profile-name"> {profile.username} </h1>
          </div>
          <div className="profile-content">
            <div className="profile-followers-container">
              <h4>Followers</h4>
              <Followers followers={profile.followers} />
            </div>
            <div className="profile-posts-container">
              <h4>Posts</h4>
              <Posts posts={profile.posts} />
            </div>
          </div>
        </>
      ) : (
        <>Loading ...</>
      )}
    </>
  );
}

export default Profile;
