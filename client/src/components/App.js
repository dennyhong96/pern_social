import React, { Fragment } from "react";

import "./App.scss";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <h1>Hello</h1>
        <h2>Hello</h2>
        <h3>Hello</h3>
        <h4>Hello</h4>
        <h5>Hello</h5>
      </div>
    </Fragment>
  );
}

export default App;
