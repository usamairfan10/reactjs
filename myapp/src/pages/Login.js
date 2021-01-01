import React from "react";
import { Container, FormControl, Form, Button } from "react-bootstrap";

class Login extends React.Component {
  // state = {
  //  name: "",
  // pwd: "",
  // };
  // handleSubmit = (e) => {
  //  e.preventDefault();
  //};

  render() {
    return (
      <div>
        <Container>
          <Form method="Get" action="./">
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
            <Button variant="primary" className="w-25 mt-3" type="submit">
              Login
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
export default Login;
