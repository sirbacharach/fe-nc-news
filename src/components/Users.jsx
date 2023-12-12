import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { getAllUsers } from "./api";
import UserCard from "./UserCard";

const Users = () => {
  const [users, setUsers] = useState([]);
  const { setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  function handleUserClick(username) {
    setUser(username);
  }

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
