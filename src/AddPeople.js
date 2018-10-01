import React, { Component } from "react";
import { Form, Input, Button } from "semantic-ui-react";

class AddPeople extends Component {
  state = {
    name: null,
    age: null,
    belt: null
  };
  handleChange = (e) => {
    this.setState ({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e) => {
      e.preventDefault()
      this.props.addPeople(this.state)
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Field>
              <label>Name :</label>
              <Input fluid 
              id="name"
              onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Age :</label>
              <Input fluid 
              id="age"
              onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Belt :</label>
              <Input fluid
              id="belt"
              onChange={this.handleChange}
              />
            </Form.Field>
          </Form.Group>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default AddPeople;
