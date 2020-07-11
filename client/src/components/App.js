import React, { Fragment } from "react";

import "./App.scss";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Fragment>
      <Navbar />

      <Home />
    </Fragment>
  );
}

export default App;
