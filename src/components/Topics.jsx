import { useEffect, useState } from "react";
import { getAllTopics } from "./api";
import TopicCard from "./TopicCard";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getAllTopics()
      .then((response) => {
        setTopics(response);
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
  if (isLoading) return <p id="status-msg">Fetching Topics....</p>;

  return (
    <>
      <ul className="topics">
        {topics.map((topic) => {
          return <TopicCard topic={topic} key={topic.slug} />;
        })}
      </ul>
    </>
  );
};

export default Topics;
