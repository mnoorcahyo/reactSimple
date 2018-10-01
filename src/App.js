import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Peoples from "./Peoples";
import AddPeople from "./AddPeople";

class App extends Component {
  state = {
    peoples: [
      {
        name: "Cahyo",
        age: 20,
        belt: "black",
        id: 1
      },
      {
        name: "Afif",
        age: 30,
        belt: "white",
        id: 2
      },
      {
        name: "haekal",
        age: 26,
        belt: "pink",
        id: 3
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <Container text>
          <h1>Hello Dude</h1>
          <p>I'M BACK !!</p>
          <Peoples peoples={this.state.peoples} />
          <br/>
          <AddPeople />
        </Container>
      </div>
    );
  }
}

export default App;
