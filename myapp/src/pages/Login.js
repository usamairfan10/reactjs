import React from "react";
import { Container, FormControl, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
//import "../index.css";
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      passwd: "",
      nameerror: "",
      passwderror: "",
    };
  }
  valid() {
    if (this.state.name.length < 1 && this.state.passwd.length < 1) {
      this.setState({
        nameerror: "Username can't be empty",
        passwderror: "Password can't be empty",
      });
    } else if (this.state.name.length < 1) {
      this.setState({
        nameerror: "Username can't be empty",
      });
    } else if (this.state.passwd.length < 6) {
      this.setState({
        passwderror: "Password length is less than 6",
      });
    } else {
      return true;
    }
  }

  submit = (e) => {
    e.preventDefault();
    this.setState({ nameerror: "", passwderror: "" });
    if (this.valid()) {
      alert("Form Submitted!");
    }
  };
  render() {
    return (
      <div>
        <Container>
          <Form method="GET" action="/login">
            <h2 class="form-text text-primary ml-3">Login</h2>
            <Form.Group>
              <Form.Label className="text-info mt-4">
                <h5>Username</h5>
              </Form.Label>
              <FormControl
                type="text"
                name="uname"
                placeholder="Username"
                size="lg"
                className="w-75"
                onChange={(event) => {
                  this.setState({ name: event.target.value });
                }}
                required
              />
              <Form.Label className="text-danger mt-4">
                {this.state.nameerror}
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label className="text-info">
                <h5>Password</h5>
              </Form.Label>
              <FormControl
                type="password"
                name="pass"
                placeholder="Password"
                size="lg"
                className="w-75"
                onChange={(event) => {
                  this.setState({ passwd: event.target.value });
                }}
                required
              />
              <Form.Label className="text-danger mt-4">
                {this.state.passwderror}
              </Form.Label>
            </Form.Group>
            <Button
              variant="primary"
              className="w-25 mt-2"
              type="submit"
              onClick={(e) => this.submit(e)}
            >
              Login
            </Button>
            <Form.Group>
              <Form.Label className="text-info">
                <h6 className="mt-4" style={{ color: "gray" }}>
                  Don't Have an Account? Sign Up <Link to="/signup">here</Link>
                </h6>
              </Form.Label>
            </Form.Group>
          </Form>
        </Container>
      </div>
    );
  }
}
export default Login;
