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

const patchArticle = (article_id, votes) => {
  return api.patch(`/api/articles/${article_id}`, votes);
};

const postComment = (article_id, comment) => {
  return api.post(`/api/articles/${article_id}/comments`, comment).then((response)=>{
 return response.data.addedComments[0]
  })
};

const deleteComment = (comment_id) => {
  return api.delete(`/api/comments/${comment_id}`).then((response)=>{
    console.log(response, "in API")
  })
};

export {
  getAllArticles,
  getSingleArticle,
  getAllUsers,
  getAllComments,
  patchArticle,
  postComment,
  deleteComment
};
