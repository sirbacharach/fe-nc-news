import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <li className="inner-container-colour article-card">

      <Link
        to={`/articles/${article.article_id}`}
        className="all-articles light-font-colour"
        style={{ textDecoration: "none" }}
      >
        <h2 id="article-title">{article.title}</h2>
        <p className="article-text-gap">Author: {article.author}</p>
        <p className="article-text-gap">Topic: {article.topic}</p>
        <p className="article-text-gap">Created: {article.created_at.slice(0, 10)}</p>
        <p className="article-text-gap">Votes: {article.votes}</p>
        <img
          id="all-article-imgs"
          src={article.article_img_url}
          alt={`the article "${article.title}"`}
        />
        <p className="article-text-gap">Comments: {article.comment_count}</p>
      </Link>
    </li>
  );

};

export default ArticleCard;
