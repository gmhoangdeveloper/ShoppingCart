import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home";
import About from "./screens/AboutUs";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Contact from "./screens/Contact";
import Shop from "./screens/Shop";
function App() {
  return (
    <BrowserRouter>
      <Route path="/contact" component={Contact} />{" "}
      <Route path="/shop" component={Shop} />
      <Route path="/about" component={About} />
      <Route path="/" exact={true} component={Home} />
    </BrowserRouter>
  );
}

export default App;
