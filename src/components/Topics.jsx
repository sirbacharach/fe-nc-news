import { useEffect, useState } from "react";
import { getAllTopics } from "./api";
import TopicCard from "./TopicCard";

const Topics = () => {
  const [topics, setTopics] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllTopics().then((response) => {
      setTopics(response);
      setIsLoading(false);
    });
  }, []);

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
