import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Manage from "./pages/Manage";
//import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div
          className="jumbotron mt-3 text-light"
          style={{ backgroundColor: "#1e90ff" }}
        >
          <h1>Online Admission System</h1>
        </div>
        <Router>
          <Switch>
            <Route path="/" exact component={Login}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/manage" component={Manage}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
