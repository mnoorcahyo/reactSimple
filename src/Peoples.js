import React from "react";

const Peoples = ({ peoples }) => {
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
          <div>Belt: {people.belt}</div><br/>
        </div>
    ) : null
  })}
    </div>
  ) 
};

export default Peoples;
