import { useEffect, useState } from "react";
import { getAllComments, getSingleArticle } from "./api";
import { useParams } from "react-router-dom";
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
      <img
        id="all-article-imgs"
        src={article.article_img_url}
        alt={`${article.title}`}
      />
      <p>Author: {article.author}</p>
      <p>{article.body}</p>
      <p>Comments: {article.comment_count}</p>
      <p>
        Created: {article.created_at ? article.created_at.slice(0, 10) : <></>}
      </p>
      <p>Topic: {article.topic}</p>
      <p>Votes: {article.votes}</p>
    </div>
        {comments.map((comment) => {
          return <CommentCard comment={comment} key={comment.comment_id} />;
        })}
      </ul>
    </>
  );
};

export default Comments;
