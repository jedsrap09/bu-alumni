import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../assets/styles/login.css";

const initialData = {
  username: "",
  password: "",
};

const [data, setData] = useState(initialData);

const handleChangeData = (e) => {
  const { name, value } = e.target;
  setData({
    ...data,
    [name]: value,
  });
};

const handleSubmit = () => {
  console.log("submit data : ", data);
};

function ForgetPassword() {
  return (
    <Container className="login-container" fluid>
      <Row>
        <Col xs={12} md={6}></Col>
        <Col xs={12} md={6}>
          <Row className="login-form">
            <Col xs={12} md={8}>
              <p className="login-home">Login</p>
              <Form.Label htmlFor="inputUsername">Username</Form.Label>
              <Form.Control
                type="text"
                id="inputUsername"
                placeholder="Enter your username"
                name="username"
                value={data.username}
                onChange={(e) => handleChangeData(e)}
              />
              <Form.Label htmlFor="inputPassword">Password</Form.Label>
              <Form.Control
                type="password"
                id="inputPassword"
                placeholder="Enter your password"
                name="password"
                value={data.password}
                onChange={(e) => handleChangeData(e)}
              />
              <a href="/forgetpassword" className="forget-password">
                Forget password
              </a>

              <Button variant="warning" onClick={handleSubmit}>
                Login
              </Button>

              <span className="question-text">
                Don't have an account?
                <a href="/register" className="sign-up">
                  &nbsp;Sign up
                </a>
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ForgetPassword;
