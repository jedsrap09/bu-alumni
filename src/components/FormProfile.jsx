import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { DatePicker } from "@react-spectrum/datepicker";
import "../assets/styles/profile.css";
import { pagesTitle } from "../constants";
import { findIdCard, addAlumni } from "../services/userService";

const initialData = {
  fname: "",
  lname: "",
  gender: "",
  studentId: "",
  faculty: "",
  major: "",
  address_line1: "",
  locality: "",
  district: "",
  province: "",
  postcode: "",
  graduation_year: "",
  card_id: "",
  passport_id: "",
  birthdate: "",
  telnum: "",
  email: "",
};

function FormProfile() {
  const [formData, setFormData] = useState(initialData);
  const [validated, setValidated] = useState(false);

  const handleChangeData = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      event.preventDefault();
    }

    setValidated(true);
  };

  useEffect(() => {
    findIdCard().then(res => {
    setFormData(res.result[0]);
    }) 
  }, []);

  const resetForm = () => {
    setFormData({
      fisrtname: "",
      lastname: "",
      gender: "",
      studentId: "",
      faculty: "",
      major: "",
      address: "",
      locality: "",
      district: "",
      province: "",
      graduation_year: "",
      card_id: "",
      passport_id: "",
      birthdate: "",
      telnum: "",
      email: "",
    });
  };

  return (
    <Container fluid="md" className="profile-con">
      <div className="section-detail">
        <Row>
          <Col>
            <h4>{pagesTitle.profile}</h4>
          </Col>
          <Col xs={3} md={1} lg={1}>
            <Button className="edit-button" variant="outline-warning">
              Edit
            </Button>
          </Col>
        </Row>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="form-profile-first">
            <Col xs={12} md={6}>
              <Form.Group controlId="inputFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  className="input-form"
                  type="text"
                  placeholder="Enter your firstname"
                  name="firstname"
                  value={formData.fname}
                  onChange={handleChangeData}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  First Name must be require.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="inputMidName">
                <Form.Label>Midname</Form.Label>
                <Form.Control
                  className="input-form"
                  type="text"
                  placeholder="Enter your midname"
                  value={formData.midname}
                  name="midname"
                  onChange={handleChangeData}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="inputLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  className="input-form"
                  type="text"
                  placeholder="Enter your lastname"
                  name="lastname"
                  value={formData.lname}
                  onChange={handleChangeData}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Last Name must be require.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="inputStudentId">
                <Form.Label>Student ID</Form.Label>
                <Form.Control
                  className="input-form"
                  type="text"
                  placeholder="Enter your student ID"
                  name="student_id"
                  value={formData.student_id}
                  onChange={handleChangeData}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="inputNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="XXXXXXXXXX"
                  name="telnum"
                  value={formData.telnum}
                  onChange={(e) => handleFormChange(e)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Phone Number must be require.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form>
                <Form.Label>Gender</Form.Label>
                <div key="gender-radio-group" className="mb-3">
                  <Form.Check
                    inline
                    label="Male"
                    name="gender"
                    type="radio"
                    id="gender-male"
                    required
                  />
                  <Form.Check
                    inline
                    label="Female"
                    name="gender"
                    type="radio"
                    id="gender-female"
                    required
                  />
                  <Form.Check
                    inline
                    label="Not specified"
                    name="gender"
                    type="radio"
                    id="gender-not-specified"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Gender must be require.
                  </Form.Control.Feedback>
                </div>
              </Form>
            </Col>
          </Row>
          <Row className="form-profile-second">
            <Col xs={12} md={6}>
              <Form.Label>Faculty of study</Form.Label>
              <Form.Select aria-label="Faculty" className="input-form">
                <option>-- Choose Faculty --</option>
                <option value="1">
                  Bangkok University Chinese International
                </option>
                <option value="2">Bangkok University International</option>
                <option value="3">School of Accounting</option>
                <option value="4">School of Architecture</option>
                <option value="5">School of Business Administration</option>
                <option value="6">School of Communication Arts</option>
                <option value="7">
                  School of Digital Media and Cinematic Arts
                </option>
                <option value="8">School of Economics and Investment</option>
                <option value="9">School of Engineering</option>
                <option value="10">
                  School of Entrepreneurship and Management
                </option>
                <option value="11">School of Fine and Applied Arts</option>
                <option value="12">
                  School of Humanities and Tourism Management
                </option>
                <option value="11">
                  School of Information Technology and Innovation
                </option>
                <option value="12">School of Law</option>
              </Form.Select>
            </Col>
            <Col xs={12} md={6}>
              <Form.Label>Major of study</Form.Label>
              <Form.Select aria-label="Major" className="input-form">
                <option>-- Choose Major --</option>
                <option value="1">
                  Bangkok University Chinese International
                </option>
                <option value="2">Bangkok University International</option>
                <option value="3">School of Accounting</option>
                <option value="4">School of Architecture</option>
                <option value="5">School of Business Administration</option>
                <option value="6">School of Communication Arts</option>
                <option value="7">
                  School of Digital Media and Cinematic Arts
                </option>
                <option value="8">School of Economics and Investment</option>
                <option value="9">School of Engineering</option>
                <option value="10">
                  School of Entrepreneurship and Management
                </option>
                <option value="11">School of Fine and Applied Arts</option>
                <option value="12">
                  School of Humanities and Tourism Management
                </option>
                <option value="11">
                  School of Information Technology and Innovation
                </option>
                <option value="12">School of Law</option>
              </Form.Select>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="inputEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChangeData}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Email must be require.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="inputGraduationYears">
                <Form.Label>Year of graduation</Form.Label>
                <Form.Control
                  className="input-form"
                  type="text"
                  placeholder="Enter your graduation year"
                  name="graduation_year"
                  value={formData.graduation_year}
                  onChange={handleChangeData}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="inputPassport">
                <Form.Label>Passport ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ex. (A123456)"
                  name="passport_id"
                  value={formData.passport_id}
                  onChange={handleChangeData}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <DatePicker className="birthdate-form" label="Birthdate" />
              <Form.Control.Feedback type="invalid">
                Passport ID must be require.
              </Form.Control.Feedback>
            </Col>
          </Row>
          <Row className="form-profile-thirt">
            <Col xs={12} md={6}>
              <Form.Group controlId="inputAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  className="input-form"
                  type="text"
                  placeholder="Enter your address"
                  name="address"
                  value={formData.address_line1}
                  onChange={handleChangeData}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Address must be require.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="inputProvince">
                <Form.Label>Province</Form.Label>
                <Form.Control
                  className="input-form"
                  type="text"
                  placeholder="Enter your province"
                  name="province"
                  value={formData.province}
                  onChange={handleChangeData}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Province must be require
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="inputLocality">
                <Form.Label>Locality</Form.Label>
                <Form.Control
                  className="input-form"
                  type="text"
                  placeholder="Enter your locality"
                  name="locality"
                  value={formData.locality}
                  onChange={handleChangeData}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Locality must be require.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="inputDistrict">
                <Form.Label>District</Form.Label>
                <Form.Control
                  className="input-form"
                  type="text"
                  placeholder="Enter your district"
                  name="district"
                  value={formData.district}
                  onChange={handleChangeData}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  District must be require
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="inputPostcode">
                <Form.Label>Postcode</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your postcode"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleChangeData}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Postcode must be require
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                className="clear-button"
                variant="outline-danger"
                type="reset"
                onClick={resetForm}
              >
                Clear
              </Button>
            </Col>
            <Col xs={3} md={1} lg={1}>
              <Button
                className="confirm-button"
                variant="outline-success"
                type="submit"
              >
                Confirm
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  );
}

export default FormProfile;
