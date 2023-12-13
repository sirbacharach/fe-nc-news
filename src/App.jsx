import "./App.css";
import Header from "./components/Header";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import { Routes, Route } from "react-router-dom";
import Topics from "./components/Topics";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/topics" element={<Topics />} />
        <Route exact path="/" element={<Articles />} />
      </Routes>
    </>
  );
}

export default App;
