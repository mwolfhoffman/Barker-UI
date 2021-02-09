import Comment from "./comment";
import { Link } from "react-router-dom";
import "./post.css";

function Post(props) {
  console.log("props in posts.js" + props);
  return (
    <>
      {props.feed.posts.map((p) => {
        return (
          <div key={p.id}>
            <blockquote className="twitter-tweet">
              <p>{p.content}</p>
              <Link to={`/profile/${p.user_id}`}>
                <img
                  src={p.profile_pic}
                  className="post-profile-pic"
                  alt={p.username + "-profile-pic"}
                />
              </Link>
              <h3>&mdash; {p.username}</h3>
              <p>
                <a> {p.comments.length} comments </a>
              </p>
            </blockquote>
          </div>

          // <div className="post" key={p.id}>
          //   <div className="post-header">
          //     <Link to={`/profile/${p.user_id}`}>
          //       <img src={p.profile_pic} className="post-profile-pic" alt={p.username + '-profile-pic'}/>
          //       <b>{p.username}</b>
          //     </Link>
          //   </div>
          //   <div className="post-content">
          //     <p> {p.content} </p>
          //     <span>{p.comments.length} comments</span>
          //   </div>
          //   <div className="comment-container">
          //     {p.comments.map((c) => {
          //       return <Comment comment={c} />;
          //     })}
          //   </div>
          // </div>
        );
      })}
    </>
  );
}

export default Post;
