import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>NC-NEWS</h1>
      <h2>Users</h2>
      <Link to={"/articles"}>
        <h2>Articles</h2>
      </Link>

      <h2>Topics</h2>
    </div>
  );
};

export default Header;
