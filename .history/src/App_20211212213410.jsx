import React, { useState } from "react";
import "./App.css";
import Remove from "./x.png";

function App() {
  const [list, setList] = useState([]);
  console.log(list);
  const removeItem = (index) => {
    const newArray = [...list];
    newArray.splice(index, 1);
    setList(newArray);
  };

  return (
    <p>
      <div className="button-container">
        <div
          className="button green"
          onClick={() =>
            setList([
              ...list,
              document.getElementsByClassName("input")[0].value,
            ])
          }
        >add</div>
        <div className="button red"></div>
        <div className="button"></div>
      </div>
      <input className="input" type="text" defaultValue="new task"/>
      <div className="list">
        {list.map((item, index) => {
          return (
            <div className="list-item">
              {item} 
              <img className="delete" alt="" src={remove} onClick={removeItem}/>
            </div>
          );
        })}
      </div>
    </p>
  );
}

export default App;
