import { Link } from "react-router-dom";

export default function (props) {
  return (
    <>
      {props.followers && props.followers.length > 0 ? (
        <>
          <span>{props.followers.length} followers</span>

          {props.followers.map((f) => {
            return (
              <div>
                <Link to={"/profile/" + f.id}>{f.username}</Link>
              </div>
            );
          })}
        </>
      ) : (
        <> User has no followers. </>
      )}
    </>
  );
}