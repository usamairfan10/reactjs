import React from "react";
import { Container, FormControl, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Signup extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Form method="Get" action="./">
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
                required
              />
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
                required
              />
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
                required
              />
            </Form.Group>
            <Button variant="primary" className="w-25 mt-3" type="submit">
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
