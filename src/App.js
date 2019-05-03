import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Ouvidoria from "./components/Ouvidoria";

function App() {
  return (
    <div
      id="app"
      className="containe-fluid p-3 min-vh-100 d-flex align-items-center justify-content-center"
    >
      <Ouvidoria />
    </div>
  );
}

export default App;
