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
        setUsers(users);
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
  if (isLoading) return <p id="status-msg">Users List Loading....</p>;

  return (
    <ul className="users">
      {users.map((user) => {
        return <UserCard user={user} key={user.username} />;
      })}
    </ul>
  );
};

export default Users;
