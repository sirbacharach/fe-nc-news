import { Link } from "react-router-dom";

const TopicCard = ({ topic }) => {
  return (
    <li>
      <h2>{topic.slug.slice(0,1).toUpperCase()+topic.slug.slice(1).toLowerCase()}</h2>
      <p>{topic.description}</p>
    </li>
  );
};

export default TopicCard
