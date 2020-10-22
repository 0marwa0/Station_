import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./pages/Sidebar";
import Dashboard from "./pages/Dashboard";
import Articles from "./pages/Article";
import Booking from "./pages/Booking";
import Events from "./pages/Events";
import Customers from "./pages/Customers";
import Admins from "./pages/Admins";
import Resources from "./pages/Resource";
import FilUploader from "./pages/FileUploader";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/Dashboard" component={Dashboard} exact />
          <Route path="/profile" component={Profile} exact />

          <Route path="/Articles" component={Articles} exact />
          <Route path="/Booking" component={Booking} exact />
          <Route path="/Events" component={Events} exact />
          <Route path="/Customers" component={Customers} exact />
          <Route path="/Admins" component={Admins} exact />
          <Route path="/Resources" component={Resources} exact />
          <Route path="/FileUploader" component={FilUploader} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
