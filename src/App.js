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
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/admin" component={AdminDashboard}/>
      </Switch>
    </Router>
  );
}

export default App;
