import React from "react";
import { Container, FormControl, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
//import "../index.css";
class Manage extends React.Component {
  constructor() {
    super();
    this.state = {
      currPasswd: "",
      newPasswd: "",
      confirmPasswd: "",
      currerror: "",
      newerror: "",
      conferror: "",
    };
  }

  valid() {
    let isValid = true;

    if (this.state.currPasswd.length < 6) {
      this.setState({
        currerror: "Password length is less than 6",
      });
      isValid = false;
    }
    if (this.state.newPasswd.length < 6) {
      this.setState({
        newerror: "Password length is less than 6",
      });
      isValid = false;
    }
    if (this.state.confirmPasswd.length < 1) {
      this.setState({
        conferror: "Invalid Password",
      });
      isValid = false;
    }
    if (this.state.newPasswd !== this.state.confirmPasswd) {
      this.setState({
        conferror: "Password doesn't match",
      });
      isValid = false;
    }

    return isValid;
  }

  submit = (e) => {
    e.preventDefault();
    this.setState({ currerror: "", newerror: "", conferror: "" });
    if (this.valid()) {
      alert("Form Submitted!");
    }
  };

  render() {
    return (
      <div>
        <Container>
          <Form method="Get" action="/manage">
            <h2 class="form-text text-primary ml-3">Change Password</h2>
            <Form.Group>
              <Form.Label className="text-info mt-4">
                <h5>Current Password</h5>
              </Form.Label>
              <FormControl
                type="password"
                name="current_password"
                placeholder="Current Password"
                size="lg"
                className="w-75"
                onChange={(event) => {
                  this.setState({ currPasswd: event.target.value });
                }}
                required
              />
              <Form.Label className="text-danger mt-1">
                {this.state.currerror}
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label className="text-info">
                <h5>New Password</h5>
              </Form.Label>
              <FormControl
                type="password"
                name="new_pass"
                placeholder="New Password"
                size="lg"
                className="w-75"
                onChange={(event) => {
                  this.setState({ newPasswd: event.target.value });
                }}
                required
              />
              <Form.Label className="text-danger mt-1">
                {this.state.newerror}
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label className="text-info">
                <h5>Confirm Password</h5>
              </Form.Label>
              <FormControl
                type="password"
                name="confirm_pass"
                placeholder="Confirm Password"
                size="lg"
                className="w-75"
                onChange={(event) => {
                  this.setState({ confirmPasswd: event.target.value });
                }}
                required
              />
              <Form.Label className="text-danger mt-1">
                {this.state.conferror}
              </Form.Label>
            </Form.Group>
            <Button
              variant="primary"
              className="w-25 mt-2"
              type="submit"
              onClick={(e) => this.submit(e)}
            >
              Update
            </Button>
            <Form.Group>
              <Form.Label className="text-info">
                <h6 className="mt-4" style={{ color: "gray" }}>
                  Go back <Link to="/login">Click</Link>
                </h6>
              </Form.Label>
            </Form.Group>
          </Form>
        </Container>
      </div>
    );
  }
}
export default Manage;
