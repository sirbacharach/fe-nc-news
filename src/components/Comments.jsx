import { useEffect, useState } from "react";
import { getAllComments, getSingleArticle } from "./api";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";
import Collapsible from "./Collapsible";

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

  if (comments.length === 0) return;
  return (
    <>
      <Collapsible descriptor="Comments">
        <ul className="articles">
          <h2 id="comments-title">Comments</h2>
          <PostComment comments={comments} setComments={setComments} />
          {comments.map((comment) => {
            return <CommentCard comment={comment} key={comment.comment_id} />;
          })}
        </ul>
      </Collapsible>
    </>
  );
};

export default Comments;
