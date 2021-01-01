import React from "react";
import Login from "./pages/Login";
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
        <h2 class="form-text text-primary ml-3">Login</h2>
        <Login></Login>
      </div>
    );
  }
}
export default App;
