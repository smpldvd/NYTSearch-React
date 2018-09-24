import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import { FormBtn, Input } from "../../components/Form";
import { Row, Container, Col } from "../../components/Grid";
import Result from "../../components/Results/Results";

class App extends Component {
  state = {
    topic: "",
    start: "",
    end: "",
    articles: [],
    savedArticles: []
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.loadArticles()
      .then(res => {
        this.setState({ savedArticles: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => {
        this.loadArticles();
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleSave = (title, url, date, image) => {
    API.saveArticles({ title, url, date, image })
      .then(res => {
        this.loadArticles();
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  davidCall = (t, s, e) => {
    console.log(t, s, e);
    API.call(t, s, e).then(res => {
      console.log(res);
      this.setState({
        articles: res.data.response.docs
      });
    });
    // .then((res)=>{
    //   this.setState({
    //     articles: res.data.response.docs
    //   })
    // })
  };

  handleOnClick = event => {
    event.preventDefault();
    let t = this.state.topic;
    let s = this.state.start;
    let e = this.state.end;
    console.log(t, s, e);
    this.davidCall(t, s, e);
  };

  render() {
    return (
      <div>
        <Jumbotron children="Search the New York Times" />
        <Container fluid>
          <Row>
            <Col size="md-12">
              <div className="card">
                <div className="card-header">Search</div>
                <div className="card-body">
                  <form>
                    <label for="topic" className="form-label">
                      Topic
                    </label>
                    <Input
                      value={this.state.topic}
                      onChange={this.handleInputChange}
                      name="topic"
                      placeholder="Like Sports (required)"
                    />
                    <label for="topic" className="form-label">
                      Start Year
                    </label>
                    <Input
                      value={this.state.start}
                      onChange={this.handleInputChange}
                      name="start"
                      placeholder="XXXX (required)"
                    />
                    <label for="topic" className="form-label">
                      End Year
                    </label>
                    <Input
                      value={this.state.end}
                      onChange={this.handleInputChange}
                      name="end"
                      placeholder="XXXX (required)"
                    />
                    <FormBtn onClick={this.handleOnClick}>Submit</FormBtn>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col size="md-12">
              <div className="card">
                <div className="card-header">Results</div>
                <div className="card-body">
                  {this.state.articles.map(article => (
                    <Result
                      id={article._id}
                      key={article._id}
                      title={article.headline.main}
                      date={article.pub_date}
                      url={article.web_url}
                      snippet={article.snippet}
                      handleSave={this.handleSave}
                    />
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
