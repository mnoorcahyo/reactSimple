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

  addPeople = (people) =>{
    people.id = Math.random()
    let peoples= [...this.state.peoples, people]
    this.setState({
      peoples:peoples
    })
  }

  deletePeople = (id) =>{
    let peoples = this.state.peoples.filter(people =>{
      return people.id!==id
    })
    this.setState({
      peoples:peoples
    })
  }

  render() {
    return (
      <div className="App">
        <Container text>
          <h1>Hello Dude</h1>
          <p>I'M BACK !!</p>
          <Peoples deletePeople={this.deletePeople} peoples={this.state.peoples} />
          <br/>
          <AddPeople addPeople={this.addPeople}/>
        </Container>
      </div>
    );
  }
}

export default App;
