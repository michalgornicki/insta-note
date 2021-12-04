import React, { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  console.log(list);

  var arrayRemove = (arr, value) => {
    return arr.filter(() => (el) {
      return el !== value;
    });
  }

  var result = arrayRemove(array, 6);


  return (
    <p>
      <div className="button-container">
        <div
          className="button"
          onClick={() =>
            setList([
              ...list,
              document.getElementsByClassName("input")[0].value,
            ])
          }
        ></div>
        <div className="button"></div>
        <div className="button"></div>
      </div>
      <input className="input" type="text" />
      <div className="list">
        {list.map((item, index) => {
          return (
            <div
              index={index}
              className="list-item"
              onClick={() => setList([])}
            >
              {item}
            </div>
          );
        })}
      </div>
    </p>
  );
}

export default App;
