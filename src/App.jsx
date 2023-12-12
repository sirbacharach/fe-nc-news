import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import Users from "./components/Users";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./components/UserContext";
function App() {
  return (
    <>
    <UserProvider>
      <Header />
      <Routes>
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/users" element={<Users />} />
        <Route exact path="/" element={<Articles />} />
      </Routes>
      </UserProvider>
    </>
  );
}

export default App;
