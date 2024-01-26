import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";

const Header = () => {
const { user } = useContext(UserContext);
const [userButton, setUserButton] = useState(false)
const [articlesButton, setArticlesButton] = useState(true)
const [topicsButton, setTopicsButton] = useState(false)

function userClicked () {
setUserButton(true)
if (articlesButton) setArticlesButton(false)
if (topicsButton) setTopicsButton(false)
}

function articlesClicked () {
  setArticlesButton(true)
  if (userButton) setUserButton(false)
  if (topicsButton) setTopicsButton(false)
  }

  function topicsClicked () {
    setTopicsButton(true)
    if (articlesButton) setArticlesButton(false)
    if (userButton) setUserButton(false)
    }

  return (
    <div className="header light-font-colour">
      {user ? <p className="loggedin">'{user}' is logged in.</p> : <p className="loggedin">Click Users button to log in</p>}
      <h1>NC-NEWS</h1>

      <div className="pages-section">
      {userButton? <Link className="pages pages-selected" onClick={()=>{userClicked()}} to={"/users"}><h2 >Users</h2></Link> : <Link className="pages" onClick={()=>{userClicked()}} to={"/users"}><h2 >Users</h2></Link>}
      {articlesButton? <Link className="pages pages-selected" onClick={()=>{articlesClicked()}} to={"/articles"}><h2>Articles</h2></Link> : <Link className="pages" onClick={()=>{articlesClicked()}} to={"/articles"}><h2>Articles</h2></Link>}
      {topicsButton? <Link className="pages pages-selected" onClick={()=>{topicsClicked()}} to={"/topics"}><h2>Topics</h2></Link> : <Link className="pages" onClick={()=>{topicsClicked()}} to={"/topics"}><h2>Topics</h2></Link> }
      </div>
    </div>
  );
};

export default Header;
