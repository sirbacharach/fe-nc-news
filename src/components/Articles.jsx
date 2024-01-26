import { useEffect, useState } from "react";
import { getAllArticles } from "./api";
import ArticleCard from "./ArticleCard";
import { Link, useSearchParams } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [order, setOrder] = useState(searchParams.get("order"));
  const [sortBy, setSortBy] = useState(searchParams.get("sort_by"));
  const [topic, setTopic] = useState(searchParams.get("topic"));
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    getAllArticles(topic, sortBy, order)
      .then((response) => {
        setArticles(response);
        setIsLoading(false);
        const newParams = new URLSearchParams(searchParams);
        if (topic !== null) newParams.set("topic", topic);
        if (sortBy !== null) newParams.set("sort_by", sortBy);
        if (order !== null) newParams.set("order", order);
        setSearchParams(newParams);
      })
      .catch((err) => {
        setApiError(err);
        setIsLoading(false);
      });
  }, [sortBy, order]);

  function handleSortChange(event) {
    setSortBy(event.target.value);
  }

  function handleOrderChange(event) {
    setOrder(event.target.value);
  }

  if (isLoading) {
  } else if (apiError) {
    return <Error message={apiError.message} />;
  }

  return (


    
    <div className="sort-container light-font-colour">
      <div className="sort-order-container">
        <div>
        <label>
          Topic:
          <select onChange={handleSortChange}>
            <option value="created_at">Date Created</option>

            <option value="votes">Votes</option>

            <option value="comment_count">Comment Count</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Sort by:
          <select onChange={handleSortChange}>
            <option value="created_at">Date Created</option>

            <option value="votes">Votes</option>

            <option value="comment_count">Comment Count</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Sort by:
          <select onChange={handleOrderChange}>
            <option value="ASC">Ascending</option>

            <option value="DESC">Descending</option>

          </select>
        </label>
      </div>
      </div>
      <ul className="articles outer-container-colour light-font-colour">
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </ul>
    </div>
  );
};

export default Articles;
