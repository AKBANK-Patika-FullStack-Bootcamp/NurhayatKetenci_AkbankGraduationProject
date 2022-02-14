import {Form,Col,Row ,Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Login.css";
import { useFormik } from 'formik';

const Login=()=>{
    const formik=useFormik({
        initialValues:{
            email:"",
            password:"",
        },
        onSubmit:(values)=>{
            let user={
                email:values.email,
                password:values.password
            }

        }
    })
return(
<div className="formdiv">
<Form>
    <h2 className="text">GİRİŞ YAP</h2>
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2" className="labeltxt">
            Email
        </Form.Label>
        <Col sm="10">
        <Form.Control type="email" placeholder="Email" />
        </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2" className="labeltxt">
            Password
        </Form.Label>
        <Col sm="10">
        <Form.Control type="password" placeholder="Password" />
        </Col>
        <Button className="btn">Giriş Yap</Button>
    </Form.Group>
</Form>
</div>
)
}
export default Login;