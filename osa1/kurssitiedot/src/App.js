import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part
        part1={props.parts.parts[0].name}
        exercises1={props.parts.parts[0].exercises}
      />
      <Part
        part2={props.parts.parts[1].name}
        exercises2={props.parts.parts[1].exercises}
      />
      <Part
        part3={props.parts.parts[2].name}
        exercises3={props.parts.parts[0].exercises}
      />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      {
        <p>
          Number of exercises{" "}
          {props.parts.parts[0].exercises +
            props.parts.parts[1].exercises +
            props.parts.parts[2].exercises}
        </p>
      }
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </div>
  );
};
const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total parts={course} />
    </div>
  );
};

export default App;
