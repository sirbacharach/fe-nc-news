import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="header">
      {user ? <p>'{user}' is logged in.</p> : <p>Click Users link to log in</p>}
      <h1>NC-NEWS</h1>
      <Link to={"/users"}>
        <h2>Users</h2>
      </Link>
      <Link to={"/articles"}>
        <h2>Articles</h2>
      </Link>

      <h2>Topics</h2>
    </div>
  );
};

export default Header;
