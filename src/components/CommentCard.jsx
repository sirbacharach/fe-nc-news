import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";
import { deleteComment } from "./api";
import Error from "./Error";

const CommentCard = ({ comment }) => {
  const [isUsersComment, setIsUsersComment] = useState(false);
  const { user } = useContext(UserContext);
  const [commentIsDeleted, setCommentIsDeleted] = useState(false);
  const [unableToDeleteComment, setUnableToDeleteComment] = useState(false);
  const [deleteClicked, setDeleteClicked] = useState(false);
  const [attemptingDelete, setAttemptingDelete] = useState(false);

  useEffect(() => {
    if (user === comment.author) {
      setIsUsersComment(true);
    }
    if (deleteClicked === true) {
      deleteComment(comment.comment_id)
        .then((response) => {
          setCommentIsDeleted(true);
          setDeleteClicked(false);
          setAttemptingDelete(false)
        })
        .catch((err) => {
          if (err.message === "Network Error") {
            setCommentIsDeleted(false);
            setUnableToDeleteComment(true);
            setAttemptingDelete(false)
          }
          setDeleteClicked(false);
        });
    }
  }, [deleteClicked]);

  function handleUserClick() {
    setDeleteClicked(true);
    setAttemptingDelete(true);
  }

  return (
    <li className="comments">
      {commentIsDeleted ? (
        <p id="error">Comment Deleted</p>
      ) : (
        <>
          <p>Created: {comment.created_at.slice(0, 10)}</p>
          <p>Author: {comment.author}</p>
          <p>{comment.body}</p>
          <p>Votes: {comment.votes}</p>
          {unableToDeleteComment ? (
            <p id="error">Unable to Delete as you are offline.</p>
          ) : (
            <></>
          )}
          {isUsersComment ? (
            attemptingDelete ? (
              <p id="black-message">Attempting to delete</p>
            ) : (
              <Link
              onClick={() => {
                handleUserClick();
              }}
            >
              Delete Comment
            </Link>
            )
          
          ) : (
            <></>
          )}
        </>
      )}
    </li>
  );
};

export default CommentCard;
