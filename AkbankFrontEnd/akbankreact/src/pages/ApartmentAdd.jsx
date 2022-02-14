import { Form, Button, Row, Container, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Add.css";
import ApartmentService from "../services/ApartmentService";
import { useFormik } from "formik";
const ApartmentAdd = () => {
  let apartmentService = new ApartmentService();
  const formik = useFormik({
    initialValues: {
      block: "",
      type: "",
      status: false,
      floor: "",
      apartment_Number: "",
    },

    onSubmit: (values) => {
      let apartment = {
        block: values.block,
        type: values.type,
        status: values.status,
        floor: values.floor,
        apartment_Number: values.apartment_Number,
      };
      apartmentService
        .addApartment(apartment)
        .then((result) => console.log(result));
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
            <h2>DAİRE EKLE</h2>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Blok Adı:</Form.Label>
                <Form.Control
                  name="block"
                  type="text"
                  placeholder="Enter block"
                  onChange={formik.handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Ev Tipi:</Form.Label>
                <Form.Control
                  name="type"
                  type="text"
                  placeholder="Enter type"
                  onChange={formik.handleChange}
                />
                <Form.Text>ex:2+1</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Ev Katı:</Form.Label>
                <Form.Control
                  name="floor"
                  type="text"
                  placeholder="Enter floor"
                  onChange={formik.handleChange}
                />
                <Form.Text>ex:1.Kat</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Daire Numarası:</Form.Label>
                <Form.Control
                  name="apartment_Number"
                  type="text"
                  placeholder="Enter apartment number"
                  onChange={formik.handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  toggle
                  name="status"
                  type="checkbox"
                  label="Dolu"
                  checked={formik.status}
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
export default ApartmentAdd;
