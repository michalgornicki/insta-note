import React, { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  console.log(list);
  const newArr = (list.slice(0, list.length)).splice(index, 1);

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
              className="list-item"
              onClick={() => setList(newArr)}
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
