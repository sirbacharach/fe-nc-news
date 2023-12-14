import { useEffect, useState } from "react";
import { getAllArticles } from "./api";
import ArticleCard from "./ArticleCard";
import { Link, useSearchParams } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("ASC");
  const [orderText, setOrderText] = useState("descending");
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(false);

  let topic = "";
  if (searchParams.get("topic")) {
    topic = searchParams.get("topic");
  }

  useEffect(() => {
    getAllArticles(topic, sortBy, order)
      .then((response) => {
        setArticles(response);
        setIsLoading(false);
        if(topic !== "") {
          setSearchParams(`?topic=${topic}&sort_by=${sortBy}&order=${order}`);
        } else{
        setSearchParams(`?sort_by=${sortBy}&order=${order}`);
      }
      })
      .catch((err) => {
        console.log(err.message);
        if (err.message === "Network Error") {
          setError("Failed to load as you are not online.");
        }
      });
  }, [sortBy, order]);

  function handleUserClick(sort_by) {
    setSortBy(sort_by);
  }

  function handleOrderClick() {
    if (order === "DESC") {
      setOrder("ASC");
      setOrderText("Sort Ascending");
    } else {
      setOrder("DESC");
      setOrderText("Sort Descending");
    }
  }

  if (error) {
    return <h2 id="status-msg">{error}</h2>;
  }
  if (isLoading) return <p id="status-msg">Articles Loading....</p>;

  return (
    <>
      Sort By:
      <Link
        onClick={() => {
          handleUserClick("created_at");
        }}
      >
        Date created
      </Link>{" "}
      <Link
        onClick={() => {
          handleUserClick("votes");
        }}
      >
        Votes
      </Link>{" "}
      <Link
        onClick={() => {
          handleUserClick("comment_count");
        }}
      >
        Comment Count
      </Link>{" "}
      <Link
        onClick={() => {
          handleOrderClick();
        }}
      >
        {orderText}
      </Link>
      <ul className="articles">
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </ul>
    </>
  );
};

export default Articles;
