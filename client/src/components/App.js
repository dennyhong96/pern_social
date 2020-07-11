import React, { Fragment } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import "./App.scss";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
    </BrowserRouter>
  );
};

export default App;
