import React, { useState } from "react";
import "./App.css";

function App() {

const [list, setList] = useState([])

  return (
    <p>
      <div className="button-container">
        <div className="button" onClick={document.getElementsByClassName(input)}></div>
        <div className="button"></div>
        <div className="button"></div>
      </div>
      <input className="input" type="text" />
      <div>{list}</div>
    </p>
  );
}

export default App;
