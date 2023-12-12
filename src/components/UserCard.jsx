import { useContext } from "react";
import { UserContext } from "./UserContext";
const UserCard = ({ user }) => {

  const { setUser } = useContext(UserContext);

  function handleUserClick(username) {
    setUser(username);
  }

  return (
    <li id="user" onClick={()=>{
      handleUserClick(user.username)
    }}>
      <h2>{user.username}</h2>
      <p>{user.name}</p>
      <img id="all-article-imgs" src={user.avatar_url} alt={user.name} />
    </li>
  );
};

export default UserCard;
