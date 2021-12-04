import React, { useState } from "react";
import "./App.css";

function App() {

const [list, setList] = useState([])

  return (
    <p>
      <div className="button-container">
        <div className="button"></div>
        <div className="button"></div>
        <div className="button"></div>
      </div>
      <input type="text" />
    </p>
  );
}

export default App;
