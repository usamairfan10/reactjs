import React from "react";
import { Container, FormControl, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
//import "../index.css";
class Manage extends React.Component {
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
                required
              />
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
                required
              />
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
                required
              />
            </Form.Group>
            <Button variant="primary" className="w-25 mt-3" type="submit">
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
