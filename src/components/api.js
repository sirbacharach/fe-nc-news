import axios from "axios";

const api = axios.create({ baseURL: "https://robs-nc-news.onrender.com" });

const getAllArticles = () => {
  return api.get("/api/articles").then((response) => {
    return response.data.articles;
  });
};

const getSingleArticle = (article_id) => {
  return api.get(`/api/articles/${article_id}`).then((response) => {
    return response.data.article;
  });
};

const patchArticle = (article_id, votes) => {
return api.patch(`/api/articles/${article_id}`, votes).then((response) => {
})
};

export { getAllArticles, getSingleArticle, patchArticle };
