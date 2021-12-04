import React, { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  var splice = list.splice(index, 1)
  console.log(list)

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
          return <div className="list-item" onClick={splice}>{item}</div>;
        })}
      </div>
    </p>
  );
}

export default App;
