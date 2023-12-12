import { useState, useEffect } from "react";


const PostComment = () => {

const [comment, setComment] = useState("")

useEffect(()=>{

}, []);

const handleSubmit = (event) => {
  event.preventDefault();

};

return (
  <form className="comment-form" onSubmit={handleSubmit}>
    Fill in the form to post your comment:
    <label className="form-input" id="name-input-label">
      Comment:
      <textarea
        type="text"
        placeholder="type your comment here..."
        id="comment-input"
        rows="4" cols="43"
        value={comment}
        onChange={(event) => {
        setComment(event.target.value);
        }}
      />
    </label>

  </form>
  )
};

export default PostComment;
