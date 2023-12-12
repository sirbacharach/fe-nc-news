const CommentCard = ({ comment }) => {
  return (
    <li className="comments">
      <p>Created: {comment.created_at.slice(0,10)}</p>
      <p>Author: {comment.author}</p>
      <p>{comment.body}</p>
      <p>Votes: {comment.votes}</p>
    </li>
  );
};

export default CommentCard;
