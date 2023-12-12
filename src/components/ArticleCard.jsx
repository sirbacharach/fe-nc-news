import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <Link to={`/articles/${article.article_id}`} className="all-articles" style={{ textDecoration: 'none' }}>
    <li>
<<<<<<< HEAD
      <Link
        to={`/articles/${article.article_id}`}
        className="all-articles"
        style={{ textDecoration: "none" }}
      >
        <h2 id="article-title">{article.title}</h2>
        <p>Author: {article.author}</p>
        <p>Topic: {article.topic}</p>
        <p>Created: {article.created_at.slice(0, 10)}</p>
        <p>Votes: {article.votes}</p>
        <img
          id="all-article-imgs"
          src={article.article_img_url}
          alt={`the article "${article.title}"`}
        />
        <p>Comments: {article.comment_count}</p>
      </Link>
=======
      <h2>{article.title}</h2>
      <p>Author: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <p>Created: {article.created_at.slice(0, 10)}</p>
      <p>Votes: {article.votes}</p>
      <img
        id="all-article-imgs"
        src={article.article_img_url}
        alt={`the article "${article.title}"`}
      />
       <p>Comments: {article.comment_count}</p>
            
>>>>>>> main
    </li>
    </Link>
    
  );
};

export default ArticleCard;
