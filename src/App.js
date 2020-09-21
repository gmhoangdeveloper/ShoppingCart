import React from "react";
import logo from "./logo.svg";
import "./App.css";

import HomeScreen from "./screens/HomeScreen";
import About from "./screens/AboutUs";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ViewDetailsScreen from "./screens/ViewDetailsScreen";
import Contact from "./screens/Contact";
import Shop from "./screens/Shop";
import Test from "./screens/Test";
import CheckOutCart from "./screens/CheckOutCart";
import { PaymentCart } from "./screens/PaymentCart";
import OrderDetailsScreen from "./screens/OrderDetailsScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import RegistrationScreen1 from "./screens/RegistrationScreen1";
import PageNotFoundScreen from "./screens/PageNotFoundScreen";
import MyAccountScreen from "./screens/MyAccount/MyAccountScreen";
import OrdersScreen from "./screens/MyAccount/OrdersScreen";
import EditPasswordScreen from "./screens/MyAccount/EditPasswordScreen";
function App() {
  return (
    <BrowserRouter>
      <Route
        exact={true}
        path="/my-account/edit-password"
        component={EditPasswordScreen}
      />{/*Okey*/}
      <Route exact={true} path="/my-account/orders" component={OrdersScreen} />{/*Okey*/}
      <Route exact={true} path="/my-account" component={MyAccountScreen} />{/*Okey*/}
      <Route path="/checkoutcart" component={CheckOutCart} />
      <Route path="/test" component={Test} />
      <Route path="/paymentcart" component={PaymentCart} />
      <Route path="/registrationscreen" component={RegistrationScreen} />
      <Route path="/registrationscreen1" component={RegistrationScreen1} />
      <Route
        path="/orderdetailsscreen/:id/:date"
        component={OrderDetailsScreen}
      /> 
      <Route path="/viewdetail/:id" component={ViewDetailsScreen} />{/*Okey*/}
      <Route path="/contact" component={Contact} />{/*Okey*/}
      <Route path="/shop" component={Shop} />
      <Route path="/about" component={About} />{/*Okey*/}
      <Route path="/" exact={true} component={HomeScreen} /> {/*Okey*/}
      {/* <Route component={PageNotFoundScreen} /> */}
    </BrowserRouter>
  );
}

export default App;
