import React, { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  var input = (document.getElementsByClassName("input")[0].value) ? document.getElementsByClassName("input")[0].value : null;
  console.log(list);

  return (
    <p>
      <div className="button-container">
        <div
          className="button"
          onClick={() =>
            setList([
              ...list,
              input
            ])
          }
        ></div>
        <div className="button"></div>
        <div className="button"></div>
      </div>
      <input className="input" type="text" />
      <div className="list">
        {list.map((item, index) => {
          return <div className="list-item" onClick={() => list.splice(index, 1)}>{item}</div>;
        })}
      </div>
    </p>
  );
}

export default App;
