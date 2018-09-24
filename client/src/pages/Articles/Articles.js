import React, { Component } from "react";
import API from "../../utils/API";
import Title from "../../components/Jumbotron/Jumbotron";
import Search from "../../components/Form/Form";
// import DeleteBtn from "../../components/DeleteBtn";
import { Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

const nytApiKey = process.env.REACT_APP_NYTAPIKEY;
const axios = require("axios");
let thisYear = new Date().getFullYear();

class Articles extends Component {
  state = {
    articles: [],
    topic: "",
    start: "",
    end: ""
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data, topic: "", start: "", end: "" })
      )
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic && this.state.startYear) {
      var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
      url += "?api-key=" + nytApiKey;
      url += "&q=" + this.state.topic;
      url += "&begin_date=" + (this.state.startYear || "1900") + "0101";
      url += "&end_date=" + (this.state.endYear || thisYear) + "1231";
      axios
        .get(url)
        .then(function(response) {
          console.log(response.data.response.docs);
          this.setState({ articles: response.data.response.docs });
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <div>
        <Title />
        <Container fluid>
          <Row>
            <Search
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
          </Row>
          <Row>
            <List>
              {this.state.articles.map(article => (
                <ListItem
                  _id={article._id}
                  key={article._id}
                  title={article.headline.main}
                  date={article.pub_date}
                  url={article.web_url}
                  snippet={article.snippet}
                  handleSaveButton={this.handleSaveButton}
                />
              ))}
            </List>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Articles;
