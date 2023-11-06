import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../assets/styles/register.css";
import { DatePicker } from "@react-spectrum/datepicker";
import { postUser } from "../services/userService";

const initialData = {
  username: "",
  password: "",
  confirm_password: "",
  card_id: "",
  birthdate: "",
};

function Register() {
  const [data, setData] = useState(initialData);
  let [date, setDate] = useState();
  const [isCanSubmit, setIsCanSubmit] = useState(false);

  const handleChangeData = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  useEffect(() => {
    handleSubmitState();
  }, [data, date]);

  const handleSubmitState = () => {
    console.log("data ", data)
    if (
      !data.username ||
      !data.password ||
      !data.confirm_password ||
      !data.card_id ||
      !date
    ) {
      return setIsCanSubmit(false);
    }
    if (data.password !== data.confirm_password) {
      return setIsCanSubmit(false);
    }
    return setIsCanSubmit(true);
  };

  const handleSubmit = () => {
    const postData = {
      ...data,
      birthdate: `${date.day}/${date.month}/${date.year}`,
    };
    postUser(postData).then((res) => {
      if(res.state === 200){
        window.location.href = "/login";
      }
    });

    console.log("submit data : ", data, date, postData);
  };

  return (
    <Container className="register-container" fluid>
      <Row>
        <Col xs={12} md={6}></Col>
        <Col xs={12} md={6}>
          <Row className="register-form">
            <Col xs={8} md={8}>
              <p className="register-home">
                <b>Register</b>
              </p>
              <Form.Label htmlFor="inputUsername">Username</Form.Label>
              <Form.Control className="input-form"
                type="text"
                id="inputUsername"
                placeholder="Enter your username"
                name="username"
                value={data.username}
                onChange={(e) => handleChangeData(e)}
              />
              <Form.Label htmlFor="inputPassword">Password</Form.Label>
              <Form.Control className="input-form"
                type="password"
                id="inputPassword"
                placeholder="Enter your password"
                name="password"
                value={data.password}
                onChange={(e) => handleChangeData(e)}
              />
              <Form.Label htmlFor="inputPassword">Confirm Password</Form.Label>
              <Form.Control className="input-form"
                type="password"
                id="inputPassword"
                placeholder="Confirm your password"
                name="confirm_password"
                value={data.confirm_password}
                onChange={(e) => handleChangeData(e)}
              />
              <Form.Label htmlFor="inputIdCard">ID Card</Form.Label>
              <Form.Control className="input-form"
                type="text"
                id="inputIdCard"
                placeholder="Enter your ID card"
                name="card_id"
                value={data.card_id}
                onChange={(e) => handleChangeData(e)}
              />
              <DatePicker label="Birthdate" value={date} onChange={setDate} />
              <Button
                variant="warning"
                onClick={handleSubmit}
                disabled={!isCanSubmit}
              >
                Register
              </Button>
              <span className="question-text">Already have an account?
              <span className="login">
                <a href="/login" className="link-login">&nbsp;Login</a>
              </span></span>
            </Col>
          </Row>
        </Col>
      </Row>
      <p className="copyright">Copyright 2023 © Bangkok University</p>
    </Container>
  );
}

export default Register;