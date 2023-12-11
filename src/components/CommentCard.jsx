const CommentCard = ({ comment }) => {
  return (
    <li className="comments">
      <p>Created: {comment.created_at}</p>
      <p>Author: {comment.author}</p>
      <p>{comment.body}</p>
      <p>Votes: {comment.votes}</p>
    </li>
  );
};

export default CommentCard;
