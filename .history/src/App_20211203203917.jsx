import React, { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);

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
        <div className="button" onClick={console.log(list)}></div>
        <div className="button"></div>
      </div>
      <input className="input" type="text" />
      <div className="list">
        {list.map((item) => {
          return <div className="list-item" onClick={target}>{item}</div>;
        })}
      </div>
    </p>
  );
}

export default App;
