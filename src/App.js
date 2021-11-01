import React from "react";
import Header from "./header/Header";
import "./styles.css";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route path="/" exact component={Home} />
      </div>
    </BrowserRouter>
  );
}
