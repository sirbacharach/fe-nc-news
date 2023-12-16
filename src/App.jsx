import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import Users from "./components/Users";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./components/UserContext";
import Topics from "./components/Topics";
import Error from "./components/Error";

function App() {

  return (
    <>
    <UserProvider>
      <Header />
      <Routes>
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<Articles />} />
        <Route path="/topics" element={<Topics />} />
        {/* <Route path="/*" element={<Error message="Route not found!"/>}/> */}
      </Routes>
      </UserProvider>
    </>
  );
}

export default App;
