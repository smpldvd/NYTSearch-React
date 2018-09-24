import axios from "axios";

export default {
  // Gets all saved headlines
  call: function(t, s, e) {
    const authKey = "9f6a8cdb2f554d8fb9ad49208641a643";
    const URL =
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
      authKey +
      "&q=" +
      t +
      "&begin_date=" +
      s +
      "0101&end_date=" +
      e +
      "0101";
    return axios.get(URL);
  },
  // Gets the headline with the given id
  loadArticles: id => axios.get("/api/articles/"),
  // Deletes the headline with the given id
  deleteArticles: id => axios.delete("/api/articles/" + id),
  // Saves a headline to the database
  saveArticles: articleData => axios.post("/api/articles", articleData)
};
