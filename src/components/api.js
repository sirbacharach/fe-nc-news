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

const getAllUsers = () => {
  return api.get("/api/users").then((response) => {
    return response.data.allUsers;
  });
};

const getAllComments = (article_id) => {
  return api.get(`/api/articles/${article_id}/comments`).then((response) => {
    return response.data.articleComments;
  });
};

export { getAllArticles, getSingleArticle, getAllComments, getAllUsers};
