import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle } from "./api";
import { patchArticle } from "./api";
import Comments from "./Comments";
import Error from "./Error";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    getSingleArticle(article_id)
      .then((response) => {
        setArticle(response);
        setIsLoading(false);
      })
      .catch((err) => {
        setApiError(err);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <p id="status-msg">Content Loading....</p>;
  } else if (apiError) {
    return <Error message={apiError.message} />;
  }

  const DownVote = () => {
    const articleWithNewVotes = { ...article };
    articleWithNewVotes.votes--;
    setArticle(articleWithNewVotes);
    const newVotes = { inc_votes: -1 };

    patchArticle(article.article_id, newVotes).catch(() => {
      setArticle(article);
    });
  };

  const UpVote = () => {
    const articleWithNewVotes = { ...article };
    articleWithNewVotes.votes++;
    setArticle(articleWithNewVotes);
    const newVotes = { inc_votes: 1 };
    patchArticle(article.article_id, newVotes).catch(() => {
      setArticle(article);
    });
  };

  return (
    <>
      <div className="single-item inner-container-colour light-font-colour">
        <h2 id="article-title">{article.title}</h2>
        <img
          id="all-article-imgs"
          src={article.article_img_url}
          alt={`${article.title}`}
        />
        <p>{article.created_at ? article.created_at.slice(0, 10) : <></>}</p>
        <p>{article.author}</p>
        <p>{article.body}</p>
        <p>Topic: {article.topic}</p>
        <p>Votes: {article.votes}</p>
        <button className="vote-button" onClick={DownVote}>
          Down Vote
        </button>
        <button className="vote-button" onClick={UpVote}>
          Up Vote
        </button>
      </div>
      <Comments />
    </>
  );
};

export default SingleArticle;
