import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle } from "./api";
import { patchArticle } from "./api";
import PostComment from "./PostComment";

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

  const DownVote = () => {
    const articleWithNewVotes = { ...article };
    articleWithNewVotes.votes--;
    setArticle(articleWithNewVotes);
    const newVotes = { inc_votes: -1 };

    patchArticle(article.article_id, newVotes)
      .catch(() => {
        setArticle(article);
      });
  };

  const UpVote = () => {
    const articleWithNewVotes = { ...article };
    articleWithNewVotes.votes++;
    setArticle(articleWithNewVotes);
    const newVotes = { inc_votes: 1 };
    patchArticle(article.article_id, newVotes)
      .catch(() => {
        setArticle(article);
      });
  };

  return (
    <div className="single-item">
      <h2>{article.title}</h2>
      <img id="all-article-imgs" src={article.article_img_url} alt={`${article.title}`} />
      <p>{article.created_at ? article.created_at.slice(0, 10) : <></>}</p>
      <p>{article.author}</p>
      <p>{article.body}</p>
      <p>Topic: {article.topic}</p>
      <p>Comments: {article.comment_count}</p>
      <p>Votes: {article.votes}</p>
      <button className="vote-button" onClick={DownVote}>
        Down Vote
      </button>
      <button className="vote-button" onClick={UpVote}>
        Up Vote
      </button>
      <PostComment/>
    </div>
  );
};

export default SingleArticle;
