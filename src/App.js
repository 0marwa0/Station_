import React, { useState, useEffect } from "react";
import { Mesg, FailedMesg } from "./API/APIMessage";
import { LoadData } from "./API";
import logo from "./logo.svg";
import "./App.css";
import "react-progress-2/main.css";
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
import CreateEvent from "./pages/Events/CreateEvent";
import Home from "./pages/Home";
import BookingDetalis from "./pages/Booking/BookingDetalis";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App(props) {
  const [admins, setadmins] = useState([]);
  const [spaces, setspaces] = useState([]);
  const [userId, setuserId] = useState("");

  const getAdmins = () => {
    LoadData(
      "Admins",
      (err, data) => {
        setadmins(data.data);
        if (err) {
          Mesg(err);
        }
      },
      (err) => {
        FailedMesg(err, "Something worng happend !");
      }
    );
  };
  const getSpace = () => {
    LoadData(
      "spaces",
      (err, data) => {
        setspaces(data.data);
        setuserId(data.user.id);
        if (err) {
          Mesg(err);
        }
      },
      (err) => {
        FailedMesg(err, "Something worng happend !");
      }
    );
  };
  useEffect(() => {
    if (localStorage.getItem("station_token")) {
      getAdmins();
      getSpace();
    }
  }, []);
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/Dashboard" component={Dashboard} exact />
          <Route
            path="/profile"
            // component={Profile}
            render={(props) => (
              <Profile {...props} admins={admins} id={userId} />
            )}
            exact
          />
          <Route path="/createEvent" component={CreateEvent} exact />

          <Route
            path="/Articles"
            // component={Articles}
            render={(props) => <Articles {...props} admins={admins} />}
            exact
          />
          <Route path="/Booking" component={Booking} exact />
          <Route path="/BookingDetalis" component={BookingDetalis} exact />
          <Route path="/Home" component={Home} exact />
          <Route
            path="/Events"
            exact
            render={(props) => <Events {...props} admins={admins} />}
          />
          <Route
            path="/Customers"
            // component={Customers}
            render={(props) => <Customers {...props} id={userId} />}
            exact
          />
          <Route path="/Admins" component={Admins} exact />
          <Route
            path="/Resources"
            exact
            render={(props) => <Resources {...props} admins={admins} />}
          />
          <Route
            path="/FileUploader"
            exact
            render={(props) => <FilUploader {...props} admins={admins} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
