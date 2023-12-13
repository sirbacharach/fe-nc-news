import { useContext } from "react";
import { UserContext } from "./UserContext";
import { useState, useEffect } from "react";
import { postComment } from "./api";
import { useParams } from "react-router";

const PostComment = ({ comments, setComments }) => {
  const { user } = useContext(UserContext);
  const [input, setInput] = useState("");
  const { article_id } = useParams();
  const [newComment, setNewComment] = useState("");
  const [hasPosted, setHasPosted] = useState(false);
  const [hasNetworkError, setHasNetworkError] = useState(false);
  const [isEmptyComment, setIsEmptyComment] = useState(false);


  useEffect(() => {
    const originalComments = [...comments];
    if (newComment !== "") {
      const commentToPost = { body: newComment, author: user };
      postComment(article_id, commentToPost)
        .then((response) => {
          setComments((comments) => {
            setHasNetworkError(false);
            return [response, ...comments];
          });
        })
        .catch((err) => {
          setComments(originalComments);
          if (err.message === "Network Error") {
            setHasNetworkError(true);
          }
          if (err.message === "Request failed with status code 400") {
            alert("A users must be logged in to leave a comment.");
          }
        });
        setNewComment("")
    } else if (hasPosted === true) {
      setIsEmptyComment(true);
    }
  }, [newComment]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input === "") {setIsEmptyComment(true)}
    else {setIsEmptyComment(false)}
    if (hasPosted === false) {
      setNewComment(input);
      setInput("");
    }
  };

  return (
    <>
      <div>
        {hasNetworkError ? (
          <h2 id="network-error-msg">Unable to post comment at this time.</h2>
        ) : (
          <></>
        )}
        {isEmptyComment ? (
          <h2 id="empty-comment-msg">Unable to accept an empty comment.</h2>
        ) : (
          <></>
        )}
        <form className="comment-form" onSubmit={handleSubmit}>
          Fill in the form to post a comment:
          <label className="form-input" id="name-input-label">
            <textarea
              type="text"
              placeholder="type your comment here..."
              id="comment-input"
              value={input}
              onChange={(event) => {
                setInput(event.target.value);
              }}
            />
          </label>
          <button id="submit-button" disabled={hasPosted}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default PostComment;
