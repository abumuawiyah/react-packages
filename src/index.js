import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./pages/dashboard";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
