import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const Search = props => {
  return (
    <div>
      <Card className="search-form" id="search-form">
        <CardHeader>
          <h2 className="card-header">Search Articles</h2>
        </CardHeader>
        <CardBody>
          <Form>
            <FormGroup>
              <Label for="topic" className="form-label">
                Topic
              </Label>
              <Input
                value={props.query}
                onChange={props.handleInputChange}
                type="text"
                name="topic"
                id="articleTopic"
                placeholder="like sports or world politic"
              />
            </FormGroup>

            <FormGroup>
              <Label for="startYear" className="form-label">
                Start Year
              </Label>
              <Input
                value={props.begin}
                onChange={props.handleInputChange}
                type="text"
                name="startYear"
                id="startYear"
                placeholder="YYYY"
              />
            </FormGroup>

            <FormGroup>
              <Label for="endYear" className="form-label">
                End Year
              </Label>
              <Input
                value={props.end}
                onChange={props.handleInputChange}
                type="text"
                name="endYear"
                id="endYear"
                placeholder="YYYY"
              />
            </FormGroup>

            <Button
              type="submit"
              onClick={props.handleFormSubmit}
              className="btn search-btn"
              size="lg"
            >
              Search
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Search;
