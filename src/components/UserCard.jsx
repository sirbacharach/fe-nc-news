const UserCard = ({ user }) => {
  return (
    <li id="user">
      <h2>{user.username}</h2>
      <p>{user.name}</p>
      <img id="all-article-imgs" src={user.avatar_url} alt={user.name} />
    </li>
  );
};

export default UserCard;
