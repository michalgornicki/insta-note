import React, { useState } from "react";
import "./App.css";

function App() {

const [list, setList] = useState([])

  return (
    <p>
      <div className="button-container">
        <div className="button" onClick={() => setList([...list, document.getElementsByClassName("input")[0].innerHTML])}></div>
        <div className="button" onClick={}></div>
        <div className="button"></div>
      </div>
      <input className="input" type="text" />
      <div className="list">{list}</div>
    </p>
  );
}

export default App;
