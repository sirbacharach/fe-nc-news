import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle } from "./api";
import { Link } from "react-router-dom";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getSingleArticle(article_id).then((response) => {
      setArticle(response);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) return <p id="status-msg">Content Loading....</p>;

  return (
    <div className="single-item">
      <h2>{article.title}</h2>
      <img
        id="all-article-imgs"
        src={article.article_img_url}
        alt={`${article.title}`}
      />
      <p>Author: {article.author}</p>
      <p>{article.body}</p>
      <Link to={`/articles/${article.article_id}/comments`}>
        <p>Comments: {article.comment_count}</p>
      </Link>
      <p>
        Created: {article.created_at ? article.created_at.slice(0, 10) : <></>}
      </p>
      <p>Topic: {article.topic}</p>
      <p>Votes: {article.votes}</p>
    </div>
  );
};

export default SingleArticle;
