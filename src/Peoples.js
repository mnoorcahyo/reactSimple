import React from "react";
import { Button } from "semantic-ui-react";

const Peoples = ({ peoples, deletePeople }) => {
  // const peoplelist = peoples.map(people => {
  //   if(people.age > 20) {
  //     return (
  //       <div className="people" key={people.id}>
  //         <div>Name : {people.name}</div>
  //         <div>Age : {people.age}</div>
  //         <div>Belt: {people.belt}</div>
  //       </div>
  //     );
  //   } else {
  //     return null
  //   }
  // });

// CONDITIONAL OUTPUT
  
  return (
    <div className="people-list">
      {peoples.map(people => {
      return people.age > 20 ? (
        <div className="people" key={people.id}>
          <div>Name : {people.name}</div>
          <div>Age : {people.age}</div>
          <div>Belt: {people.belt}</div>
          <Button type='submit' onClick={() => {deletePeople(people.id)}}>Delete</Button>
          <br/>
        </div>
    ) : null
  })}
    </div>
  ) 
};

export default Peoples;
