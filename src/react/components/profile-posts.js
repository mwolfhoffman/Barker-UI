import { Link } from "react-router-dom";

export default function (props) {
  return (
    <>
      {props.posts && props.posts.length > 0 ? (
        <>
          <span>{props.posts.length} posts</span>

          {props.posts.map((p) => {
            return (
              <div>
                <span>{p.content}</span>
                </div>
            );
          })}
        </>
      ) : (
        <> User has no posts. </>
      )}
    </>
  );
}