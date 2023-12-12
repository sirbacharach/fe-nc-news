import { useEffect, useState } from "react";
import { getAllComments, getSingleArticle } from "./api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CommentCard from "./CommentCard";

const Comments = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [article, setArticle] = useState({})
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllComments(article_id).then((response) => {
      setComments(response);
      });
    getSingleArticle(article_id).then((response)=>{
        setArticle(response);
        setIsLoading(false);
    })
  }, []);

  if (isLoading) return <p id="status-msg">Comments Loading....</p>;

  return (
    <>
    
      <ul className="articles">

      <div className="single-item">

      <h2>{article.title}</h2>
      <p>Author: {article.author}</p>
      <p>Comments: {article.comment_count}</p>

      <p>Votes: {article.votes}</p>
      <Link
        to={`/articles/${article.article_id}`}
        className="all-articles"
      ><p>Return to Article</p>
      </Link>
    </div>
    
    <h2 id="comments-title">Comments</h2>
        {comments.map((comment) => {
          return <CommentCard comment={comment} key={comment.comment_id} />;
        })}
      </ul>
    </>
  );
};

export default Comments;
