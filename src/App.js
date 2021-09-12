import "./App.css";
import React from "react";
import PropTypes from "prop-types";

function Test({ name, picture, rating }) {
  return (
    <div>
      <h1>it is {name}</h1>
      <h3>{rating}/5.0</h3>
      <img src={picture} alt={name} />
    </div>
  );
}

Test.prototypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const foodILike = [
  {
    id: "1",
    name: "one",
    Image:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    rating: 3,
  },
  {
    id: "2",
    name: "two",
    Image: "https://t1.daumcdn.net/cfile/tistory/253FA23E57CD8A1915",
    rating: 2,
  },
];

function App() {
  return (
    <div>
      {foodILike.map((current) => (
        <Test
          key={current.id}
          name={current.name}
          picture={current.Image}
          rating={current.rating}
        />
      ))}
    </div>
  );
}

export default App;
