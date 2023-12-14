import { useEffect, useState } from "react";
import { getAllArticles } from "./api";
import ArticleCard from "./ArticleCard";
import { useSearchParams } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const [error, setError] = useState(false);
  let topic = "";
  if (searchParams.get("topic")) {
    topic = `?topic=${searchParams.get("topic")}`;
  }

  useEffect(() => {
    getAllArticles(topic)
      .then((response) => {
        setArticles(response);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        if (err.message === "Network Error") {
          setError("Failed to load as you are not online.");
        }
      });
  }, []);

  if (error) {
    return <h2 id="status-msg">{error}</h2>;
  }
  if (isLoading) return <p id="status-msg">Articles Loading....</p>;

  return (
    <>
      <ul className="articles">
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </ul>
    </>
  );
};

export default Articles;
