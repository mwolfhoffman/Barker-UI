import { Link } from 'react-router-dom'

function Comment(props) {
  let c = props.comment;
  return (
    <div className="comment">
      <div className="comment-header">
        <Link to={`/profile/${c.user_id}`}>
        <h4>{c.username}</h4>
        </Link>
        <span>{c.comment}</span>
      </div>
    </div>
  );
}

export default Comment;