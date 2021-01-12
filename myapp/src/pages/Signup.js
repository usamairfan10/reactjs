import React from "react";
import { Container, FormControl, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
//import "../index.css";
class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      passwd: "",
      confirmpasswd: "",
      emailerror: "",
      passwderror: "",
      confpasswderror: "",
    };
  }

  valid() {
    let isValid = true;

    if (this.state.email.length < 1) {
      this.setState({
        emailerror: "Invalid Email",
      });
      isValid = false;
    }
    if (this.state.passwd.length < 6) {
      this.setState({
        passwderror: "Password length is less than 6",
      });
      isValid = false;
    }
    if (this.state.confirmpasswd.length < 1) {
      this.setState({
        confpasswderror: "Invalid Password",
      });
      isValid = false;
    }
    if (this.state.confirmpasswd !== this.state.passwd) {
      this.setState({
        confpasswderror: "Password doesn't match",
      });
      isValid = false;
    }
    if (
      this.state.email.length > 1 &&
      !this.state.email.includes("@") &&
      !this.state.email.includes(".")
    ) {
      this.setState({
        emailerror: "Email doesn't contains '@'",
      });
      isValid = false;
    }
    if (
      this.state.email.length > 1 &&
      this.state.email.lastIndexOf(".") - this.state.email.indexOf("@") < 2
    ) {
      this.setState({
        emailerror: "Invalid Email. e.g use '.' after '@'",
      });
      isValid = false;
    }
    if (
      this.state.email.length > 1 &&
      this.state.email.length - this.state.email.lastIndexOf(".") < 2
    ) {
      this.setState({
        emailerror: "Invalid Email. e.g use 'com' after '.'",
      });
      isValid = false;
    }

    return isValid;
  }
  submit = (e) => {
    e.preventDefault();
    this.setState({ emailerror: "", passwderror: "", confpasswderror: "" });
    if (this.valid()) {
      alert("Form Submitted!");
    }
  };

  render() {
    return (
      <div>
        <Container>
          <Form method="Get" action="/signup">
            <h2 class="form-text text-primary ml-3">Sign up</h2>
            <Form.Group>
              <Form.Label className="text-info mt-4">
                <h5>Email</h5>
              </Form.Label>
              <FormControl
                type="email"
                name="email"
                placeholder="Email"
                size="lg"
                className="w-75"
                onChange={(event) => {
                  this.setState({ email: event.target.value });
                }}
                required
              />
              <Form.Label className="text-danger mt-1">
                {this.state.emailerror}
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
              <Form.Label className="text-danger mt-1">
                {this.state.passwderror}
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label className="text-info">
                <h5>Confirm Password</h5>
              </Form.Label>
              <FormControl
                type="password"
                name="pass2"
                placeholder="Confirm Password"
                size="lg"
                className="w-75"
                onChange={(event) => {
                  this.setState({ confirmpasswd: event.target.value });
                }}
                required
              />
              <Form.Label className="text-danger mt-1">
                {this.state.confpasswderror}
              </Form.Label>
            </Form.Group>
            <Button
              variant="primary"
              className="w-25 mt-2"
              type="submit"
              onClick={(e) => this.submit(e)}
            >
              Create Account
            </Button>
            <Form.Group>
              <Form.Label className="text-info">
                <h6 className="mt-4" style={{ color: "gray" }}>
                  Already Have an Account? Login <Link to="/login">here</Link>
                </h6>
              </Form.Label>
            </Form.Group>
          </Form>
        </Container>
      </div>
    );
  }
}
export default Signup;
