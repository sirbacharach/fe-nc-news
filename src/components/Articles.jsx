import { useEffect, useState } from "react";
import { getAllArticles } from "./api";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("ASC");
  const [orderText, setOrderText] = useState("descending");
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getAllArticles(sortBy, order).then((response) => {
      console.log(sortBy, order);
      setArticles(response);
      setIsLoading(false);
      setSearchParams(`?sort_by=${sortBy}&order=${order}`);
    });
  }, [order, sortBy]);

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
