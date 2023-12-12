import { useEffect, useState } from "react";
import { getAllUsers } from "./api";
import UserCard from "./UserCard";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllUsers().then((users) => {
      setUsers(users);
      setIsLoading(false);
    });
  }, []);

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
