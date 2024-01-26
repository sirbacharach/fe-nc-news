import { useEffect, useState } from "react";
import { getAllUsers } from "./api";
import UserCard from "./UserCard";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getAllUsers()
      .then((users) => {
        setUsers(users)
      }).then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        if (err.message === "Network Error") {
          setError("Failed to load as you are not online.");
        }
      });
  }, [isLoading]);

  if (error) {
    return <h2 id="status-msg">{error}</h2>;
  }
  if (isLoading)
    return (
      <div className="loading-container">
        <p className="light-font-colour" id="status-msg">
          Please Wait
        </p>
        <p className="light-font-colour" id="status-msg">
          Users List Loading....
        </p>
      </div>
    );

  return (
    <ul className="users">
      {users.map((user) => {
        return <UserCard userObj={user} key={user.username} />;
      })}
    </ul>
  );
};

export default Users;
