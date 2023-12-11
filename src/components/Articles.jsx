import { useEffect, useState } from "react";
import { getAllArticles } from "./api";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllArticles().then((response) => {
      setArticles(response);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p id="status-msg">Content Loading....</p>;

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
