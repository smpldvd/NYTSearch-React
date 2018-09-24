import axios from "axios";

export default {
  // Grab all articles
  getArticles: () => axios.get("/api/articles"),
  getArticle: id => axios.get("/api/articles/" + id),
  deleteArticle: id => axios.delete("/api/books/" + id),
  saveArticle: articleData => axios.post("/api/articles", articleData)
};
