import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import About from "./screens/AboutUs";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ViewDetailsScreen from "./screens/viewDetailsScreen";
import Contact from "./screens/Contact";
import Shop from "./screens/Shop";
import Test from "./screens/Test";
import CheckOutCart from "./screens/CheckOutCart";
import { PaymentCart } from "./screens/PaymentCart";
function App() {
  return (
    <BrowserRouter>
      <Route path="/checkoutcart" component={CheckOutCart} />
      <Route path="/test" component={Test} />
      <Route path="/paymentcart" component={PaymentCart} />
      <Route path="/viewdetail/:id" component={ViewDetailsScreen} />
      <Route path="/contact" component={Contact} />
      <Route path="/shop" component={Shop} />
      <Route path="/about" component={About} />
      <Route path="/" exact={true} component={HomeScreen} />
    </BrowserRouter>
  );
}

export default App;
