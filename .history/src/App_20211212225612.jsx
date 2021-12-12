import React, { useState, useEffect } from "react";
import "./App.css";
import Remove from "./x.png";

function App() {
  const [list, setList] = useState(["first task"]);


  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      document.getElementsByClassName("green")[0].value = ""
    }
  }

  const addInput = () => {
    setList([...list, document.getElementsByClassName("input")[0].value]);
  };

  const clearInput = () => {
    document.getElementsByClassName("input")[0].value = "";
  };

  console.log(list);

  const removeItem = (index) => {
    const newArray = [...list];
    newArray.splice(index, 1);
    setList(newArray);
  };

  return (
    <p>
      <div className="button-container"></div>
      <div className="input-wrapper">
        <input className="input" type="text" defaultValue="new task" onKeyDown={handleKeyDown} />
        <div
          className="button green"
          onClick={() => {
            addInput();
            clearInput();
          }}
        >
          add
        </div>
        <div className="button red" onClick={() => setList([])}>
          clear
        </div>
      </div>
      <div className="list">
        {list.map((item, index) => {
          return (
            <div className="list-item">
              {item}
              <img
                className="delete"
                alt=""
                src={Remove}
                onClick={removeItem}
              />
            </div>
          );
        })}
      </div>
    </p>
  );
}

export default App;
