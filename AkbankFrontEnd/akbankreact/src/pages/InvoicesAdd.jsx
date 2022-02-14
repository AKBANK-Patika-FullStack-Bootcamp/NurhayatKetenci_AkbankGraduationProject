import { Form, Button, Row, Container, Col, Dropdown } from "react-bootstrap";
import ApartmentService from "../services/ApartmentService";
import InvoicesService from "../services/InvoicesService";
import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import "./css/Add.css";

const InvoicesAdd = () => {
  let invoicesService = new InvoicesService();
  let apartmentService = new ApartmentService();
  const [apartments, setApartments] = useState([]);
  useEffect(() => {
    apartmentService
      .getApartments()
      .then((result) => setApartments(result.data.data));
  }, []);
  const formik = useFormik({
    initialValues: {
      apartment_number: "",
      date: new Date(),
      invoice_type: "",
      price: "",
      status: false,
    },
    onsubmit: (values) => {
      let apartmentData = apartments.find(
        (apartment) => apartment.apartment_Number == values.apartment_number
      );
      let invoices = {
        apartment_Id: apartmentData.id,
        invoice_type: values.invoice_type,
        price: values.price,
        status: values.status,
        date: new Date(),
      };
      invoicesService
        .addInvoices(invoices)
        .then((result) => console.log(result));
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
            <h2>FATURA EKLE</h2>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Fatura Türü:</Form.Label>
                <Form.Control
                  name="invoice_type"
                  type="text"
                  placeholder="Enter invoice type"
                  onChange={formik.handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Fatura Ücreti:</Form.Label>
                <Form.Control
                  name="price"
                  type="text"
                  placeholder="Enter price"
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
                  name="status"
                  type="checkbox"
                  label="Ödenmiş"
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
export default InvoicesAdd;
