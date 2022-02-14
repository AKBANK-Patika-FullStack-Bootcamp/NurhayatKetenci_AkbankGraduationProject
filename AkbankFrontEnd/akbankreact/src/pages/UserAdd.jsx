import { Form, Button, Row, Container, Col, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthService from "../services/AuthService";
import ApartmentService from "../services/ApartmentService";
import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import "./css/Add.css";
const UserAdd = () => {
  let authService = new AuthService();
  let apartmentService = new ApartmentService();
  const [apartments, setApartments] = useState([]);
  useEffect(() => {
    apartmentService
      .getApartments()
      .then((result) => setApartments(result.data.data));
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      identity_Number: "",
      phone_Number: "",
      vehicle_information: false,
      apartment_number: "",
      apartment_Information: "",
    },

    onSubmit: (values) => {
      let apartmentData = apartments.find(
        (apartment) => apartment.apartment_Number == values.apartment_number
      );
      let user = {
        email: values.email,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
        identity_Number: values.identity_Number,
        phone_Number: values.phone_Number,
        vehicle_information: values.vehicle_information,
        apartment_Id: apartmentData.id,
        apartment_Information: values.apartment_Information,
      };

      authService.addUser(user).then((result) => console.log(result));
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleChange = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
    <div className="addDiv">
      <Container>
        <Row>
          <Col>
            <h2>KULLANICI EKLE</h2>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Ad:</Form.Label>
                <Form.Control
                  name="firstName"
                  type="text"
                  placeholder="Enter First Name"
                  onChange={formik.handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Ev Tipi:</Form.Label>
                <Form.Control
                  name="lastName"
                  type="text"
                  placeholder="Enter Last Name"
                  onChange={formik.handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Tc kimlik numarası:</Form.Label>
                <Form.Control
                  name="identity_Number"
                  type="text"
                  placeholder="Enter identity number"
                  onChange={formik.handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Telefon Numarası:</Form.Label>
                <Form.Control
                  name="phone_Number"
                  type="text"
                  placeholder="Enter phone number"
                  onChange={formik.handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Sahiplik Durumu:</Form.Label>
                <Form.Control
                  name="apartment_Information"
                  type="text"
                  placeholder="Enter apartment information"
                  onChange={formik.handleChange}
                />
                <Form.Label>Ev sahibi / Kiracı</Form.Label>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  name="email"
                  type="text"
                  placeholder="Enter email"
                  onChange={formik.handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  name="password"
                  type="text"
                  placeholder="Enter password"
                  onChange={formik.handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Daire No Seçiniz</Form.Label>
                <Form.Select
                  onChange={formik.handleChange}
                  name="apartment_number"
                >
                  {apartments.map((apartment) => (
                    <option>{apartment.apartment_Number}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  toggle
                  name="vehicle_information"
                  type="checkbox"
                  label="Aracı Var"
                  checked={formik.vehicle_information}
                  onChange={formik.handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Ekle
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default UserAdd;
