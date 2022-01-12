//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

var React = require("react");
var ReactDOM = require("react-dom");

const name = "Rick";
const name2 = "Morty";
const number = Math.floor(Math.random() * 100);

ReactDOM.render(
  <div>
    <h1> Practice {name + " & " + name2}! </h1>

    <p>Todays number: {number} </p>

    <ul>
      <li>Tea</li>
      <li>Milk</li>
    </ul>
  </div>,

  document.getElementById("root")
);
