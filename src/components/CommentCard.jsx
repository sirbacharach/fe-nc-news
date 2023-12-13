import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";
import { deleteComment } from "./api";

const CommentCard = ({ comment }) => {
  const [isUsersComment, setIsUsersComment] = useState(false);
  const { user } = useContext(UserContext);
  const [commentIsDeleted, setCommentIsDeleted] = useState(false);

  useEffect(() => {
    if (user === comment.author) {
      setIsUsersComment(true);
    }
    if (commentIsDeleted === true) {
      deleteComment(comment.comment_id).catch((err) => {
        if (err.message !== "Request failed with status code 404") {
          setCommentIsDelted = false;
        }
      });
    }
  }, [commentIsDeleted]);

  function handleUserClick(comment_id) {
    setCommentIsDeleted(true);
  }

  return (
    <li className="comments">
      {commentIsDeleted ? (
        <p id="deleted-comment">Comment Deleted</p>
      ) : (
        <>
          <p>Created: {comment.created_at.slice(0, 10)}</p>
          <p>Author: {comment.author}</p>
          <p>{comment.body}</p>
          <p>Votes: {comment.votes}</p>
          {isUsersComment ? (
            <Link
              onClick={() => {
                handleUserClick(comment.comment_id);
              }}
            >
              Delete Comment
            </Link>
          ) : (
            <></>
          )}
        </>
      )}
    </li>
  );
};

export default CommentCard;
