import React, { Fragment } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import "./App.scss";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Home />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
