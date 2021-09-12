import "./App.css";
import React from "react";

function Test({ name, picture }) {
  return (
    <div>
      <h1>it is {name}</h1>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    name: "one",
    Image:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
  },
  {
    name: "two",
    Image: "https://t1.daumcdn.net/cfile/tistory/253FA23E57CD8A1915",
  },
];

function App() {
  return (
    <div>
      {foodILike.map((current) => (
        <Test name={current.name} picture={current.Image} />
      ))}
    </div>
  );
}

export default App;
