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
  const [buttonClicked, setButtonClicked] = useState(false);
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
  }, [buttonClicked]);

  function handleUserClick(sort_by) {
    setSortBy(sort_by);
    setButtonClicked(!buttonClicked);
  }

  function handleOrderClick() {
    if (order === "DESC") {
      setOrder("ASC");
    } else {
      setOrder("DESC");
    }
    setButtonClicked(!buttonClicked);
  }

  if (isLoading) {
    return <p id="status-msg">Articles Loading....</p>;
  } else if (apiError) {
    return <Error message={apiError.message} />;
  }

  return (
    <section>
      Sort By:
      {sortBy === "created_at" ? (
        <span className="sort">Date created</span>
      ) : (
        <Link
        className="sort"
          onClick={() => {
            handleUserClick("created_at");
          }}
        >
          Date created
        </Link>
      )}{" "}
      {sortBy === "votes" ? (
        <span className="sort">Votes</span>
      ) : (
        <Link
        className="sort"
          onClick={() => {
            handleUserClick("votes");
          }}
        >
          Votes
        </Link>
      )}{" "}
      {sortBy === "comment_count" ? (
        <span className="sort">Comment Count</span>
      ) : (
        <Link
        className="sort"
          onClick={() => {
            handleUserClick("comment_count");
          }}
        >
          Comment Count
        </Link>
      )}{" "}
      {searchParams.get("order") === "DESC" ? (
        <Link
        className="order"
          onClick={() => {
            handleOrderClick();
          }}
        >
          Sort Ascending
        </Link>
      ) : (
        <Link
        className="order"
          onClick={() => {
            handleOrderClick();
          }}
        >
          Sort Descending
        </Link>
      )}
      <ul className="articles">
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </ul>
    </section>
  );
};

export default Articles;
