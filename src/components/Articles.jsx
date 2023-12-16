import { useEffect, useState } from "react";
import { getAllArticles } from "./api";
import ArticleCard from "./ArticleCard";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [orderText, setOrderText] = useState("Sort Descending");
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [order, setOrder] = useState(searchParams.get("order"));
  const [sortBy, setSortBy] = useState(searchParams.get("sort_by"));
  const [topic, setTopic] = useState(searchParams.get("topic"));
  const [buttonClicked, setButtonClicked] = useState(false)

  useEffect(() => {
    getAllArticles(topic, sortBy, order).then((response) => {
      setArticles(response);
      setIsLoading(false);
      const newParams = new URLSearchParams(searchParams);
      if (topic !== null) newParams.set('topic', topic);
      if (sortBy !== null) newParams.set('sort_by', sortBy);
      if (order !== null) newParams.set('order', order)
      setSearchParams(newParams);
    });
  }, [buttonClicked]);

  function handleUserClick(sort_by) {
  setSortBy(sort_by)
  setButtonClicked(!buttonClicked)
  }

  function handleOrderClick() {
  if (order === "DESC") {
    setOrder("ASC")
    setOrderText("Sort Ascending")
  } else {
    setOrder("DESC")
    setOrderText("Sort Descending")
  }
  setButtonClicked(!buttonClicked)
  }

  if (error) {
    return <h2 id="status-msg">{error}</h2>;
  }
  if (isLoading) return <p id="status-msg">Articles Loading....</p>;

  return (
    <section >
      Sort By:
      {sortBy === "created_at"? <>Date created</> : <Link
        onClick={() => {
          handleUserClick("created_at");
        }}
      >
        Date created
      </Link>}{" "}
        {sortBy === "votes"? <>Votes</> : <Link
        onClick={() => {
          handleUserClick("votes");
        }}
      >
        Votes
      </Link>}{" "}

{sortBy === "comment_count"? <>Comment Count</> : <Link
        onClick={() => {
          handleUserClick("comment_count");
        }}
      >
        Comment Count
      </Link>}{" "}
      {searchParams.get("order") === "DESC"? <Link
        onClick={() => {
          handleOrderClick();
        }}
      >
        Sort: ascending
      </Link> : <Link
        onClick={() => {
          handleOrderClick();
        }}
      >
        Sort: descending
      </Link>}


      <ul className="articles">
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </ul>
    </section>
  );
};

export default Articles;
