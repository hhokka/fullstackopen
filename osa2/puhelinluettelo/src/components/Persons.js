import personService from "../services/persons.js";
import { useState } from "react";

const handleClick = (person) => {
  let result = false;
  result = window.confirm(`Delete ${person.name}?`);
  if (result) {
    personService.remove(person.id);
  }
  window.location.reload(false);
};
const Persons = (props) => {
  return (
    <div>
      {props.persons.map((person, i) => (
        <p key={i}>
          {person.name} {person.number}
          <button onClick={() => handleClick(person)}>delete</button>
        </p>
      ))}
    </div>
  );
};

export default Persons;
