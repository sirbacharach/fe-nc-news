import { useState, useEffect } from "react";
import Collapsible from "./Collapsible";

const PostComment = () => {

const [comment, setComment] = useState("")

useEffect(()=>{

}, []);

const handleSubmit = (event) => {
  event.preventDefault();

};

return (
  <>
  
    <div>
  <form className="comment-form" onSubmit={handleSubmit}>
    Fill in the form to post a comment:
    <label className="form-input" id="name-input-label">
      <textarea
        type="text"
        placeholder="type your comment here..."
        id="comment-input"

        value={comment}
        onChange={(event) => {
        setComment(event.target.value);
        }}
      />
    </label>
    <button id="submit-button">Submit</button>
  </form>
  </div>

  </>
  )
};

export default PostComment;
