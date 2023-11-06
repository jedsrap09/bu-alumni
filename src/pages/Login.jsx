import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../assets/styles/login.css";
import { postLogin } from "../services/authService";

const initialData = {
  username: "",
  password: "",
};

function Login() {
  const [data, setData] = useState(initialData);

  const handleChangeData = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    postLogin(data).then((res) => {
      if (res.status === 200) {
        localStorage.setItem(
          "access_token",
          JSON.stringify(res.data?.result?.token)
        );
        window.location.href = "/";
      }
    });
  };

  return (
    <Container className="login-container" fluid>
      <Row>
        <Col xs={12} md={6}></Col>
        <Col xs={12} md={6}>
          <Row className="login-form">
            <Col xs={8} md={8}>
              <p className="login-home">Login</p>
              <Form.Label htmlFor="inputUsername">Username</Form.Label>
              <Form.Control
                className="input-form"
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
              <Col>
                <span className="question-text">
                  Don't have an account?
                  <a href="/register" className="sign-up">
                    &nbsp;Sign up
                  </a>
                </span>
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
      <p className="copyright">Copyright 2023 © Bangkok University</p>
    </Container>
  );
}

export default Login;
