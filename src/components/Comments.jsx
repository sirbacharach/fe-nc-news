import { useEffect, useState } from "react";
import { getAllComments, getSingleArticle } from "./api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CommentCard from "./CommentCard";

const Comments = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllComments(article_id).then((response) => {
      setComments(response);
    });
    getSingleArticle(article_id).then((response) => {
      setArticle(response);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p id="status-msg">Comments Loading....</p>;

  if (comments.length === 0) return

  return (
    <>
      <ul className="articles">
        <h2 id="comments-title">Comments</h2>
        {comments.map((comment) => {
          return <CommentCard comment={comment} key={comment.comment_id} />;
        })}
      </ul>
    </>
  );
};

export default Comments;
