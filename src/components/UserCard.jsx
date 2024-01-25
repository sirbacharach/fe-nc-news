import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
const UserCard = ({ userObj }) => {
  const { user, setUser } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect (()=>{
 if(user === userObj.username) {
  setIsLoggedIn(true)
 } else {
  setIsLoggedIn(false)
 }
  }, [user]);


  function handleUserClick(username) {
    setUser(username);
    }

  return (

    <li id="user" onClick={() => {handleUserClick(userObj.username);}}>
      {isLoggedIn? <h2 id="positive-message">Logged In!</h2>:<></>}
      <h2>{userObj.username}</h2>
      <p>{userObj.name}</p>
      <img className="user-image" id="all-article-imgs" src={userObj.avatar_url} alt={userObj.name} />
    </li>
  );
};

export default UserCard;
