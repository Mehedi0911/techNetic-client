import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/Home/Home/Home";
import '../src/components/Utilities/utilities.css'
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import { Nav } from "react-bootstrap";
import Footer from "./components/Home/Footer/Footer";
import NavBar from "./components/Home/Navbar/NavigationBar";
import Cart from "./components/Checkout/Cart/Cart";
import Checkout from "./components/Checkout/Checkout/Checkout";
import PaymentForm from "./components/Checkout/Checkout/PaymentForm";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import OrderConfirmationDialog from "./components/Checkout/Checkout/OrderConfirmationDialog";
function App() {

  const stripePromise = loadStripe('pk_test_51IqLETGPs5ZHTEdtPP6dyGKds02FbAUD7P8mbZvho3Q88mMmVM5URHNTbHgqqsNzHaLf6dWYgTiCYmTBkXVPh3hV00kNCrB0X5');
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/admin" component={AdminDashboard}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/orderPlaced" component={OrderConfirmationDialog}/>
        <Route path='/payment'>
        <Elements stripe={stripePromise}>
          
          <PaymentForm ></PaymentForm>
        </Elements>
        </Route>

      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
