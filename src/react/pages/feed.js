import React, { useState, useEffect } from "react";
import * as Cookies from "js-cookie";
import Post from "../components/post";
import { useHistory } from "react-router-dom";

function Feed() {
  let [feed, setFeed] = useState(null);
  const history = useHistory();

  useEffect(async () => {
    let id = Cookies.get("user-id");
    if (!id) {
      history.push("/login");
    }
    if (!feed) {
      //  If there is no feed, get it from API:
      let res = await fetch("http://localhost:3000/api/feed", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*/*",
          "Access-Token": Cookies.get("access-token"),
        },
      });
      let data = await res.json();
      setFeed((current) => (current = data));
    }
  });

  return (
    <>
      <h1> Feed </h1>
      {feed && feed.posts && feed.posts.length > 0 ? (
        <>
          <Post feed={feed} />
        </>
      ) : (
        <>
          <span>There are no posts yet...</span>
        </>
      )}
    </>
  );
}

export default Feed;
