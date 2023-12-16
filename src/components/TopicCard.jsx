import { Link } from "react-router-dom";

const TopicCard = ({ topic }) => {
  return (
    <Link
      to={`/articles?topic=${topic.slug.toLowerCase()}`}
      style={{ textDecoration: "none" }}
          >
      <li className="topic">
        {" "}
        <h2>
          {topic.slug.slice(0, 1).toUpperCase() +
            topic.slug.slice(1).toLowerCase()}
        </h2>
        <p>{topic.description}</p>
      </li>
    </Link>
  );
};

export default TopicCard;
