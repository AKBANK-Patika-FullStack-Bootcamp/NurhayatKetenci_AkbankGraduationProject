import { Form, Button, Row, Container, Col, InputGroup, FormControl } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./ApartmentAdd.css";
import ApartmentService from "../services/ApartmentService";
import { useFormik } from 'formik';
const SendMessage = () => {
let messageService = new MessageService();
const formik = useFormik({
user_Id: {
message: "",
status: true,
date:new Date()
},

onSubmit: (values) => {
let message = {
user_Id: values.user_Id,
message: values.message
}
messageService.addMessage(message).then((result) => console.log(result));

}
});
const handleChangeSemantic = (value, fieldName) => {
formik.setFieldValue(fieldName, value);
};

return (
<div className="addDiv">
    <Container>
        <Row>
            <Col>
            <h2>
                DAİRE EKLE
            </h2>
            <Form onSubmit={formik.handleSubmit}>
               <Form.Group className="mb-3">
                    <Form.Label>Mesaj:</Form.Label>
                    <Form.Control name="type" type="text" placeholder="Enter message" onChange={formik.handleChange} />
                    <Form.Text>ex:2+1</Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Ekle
                </Button>
            </Form>
            </Col>
        </Row>
    </Container>
</div>
)
}
export default ApartmentAdd;