import { useEffect,useState } from 'react';
import { Card,Header,NavDropdown,Nav,Container,Row,Col,Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import InvoicesService from "../services/InvoicesService";

const InvoicesList=()=>{
const [invoices, setInvoices] = useState([])
useEffect(() => {
let invoicesService = new InvoicesService()
invoicesService.getInvoicesByApartmentId().then(result => setInvoices(result.data.data))

},[])

return(
<Container>
  <Row>
    {
    invoices.map(invoice => (
    <Card key={invoice.id} style={{ width: '24rem' }} className="mb-2 p-2 mt-3 carddiv">
      <Card.Header>Fatura Türü:{invoice.invoice_type}</Card.Header>
      <Card.Body>
        <Card.Title>Fatura Ücreti:{invoice.price} </Card.Title>
        
        <Button>Faturayı Öde</Button>
      </Card.Body>
    </Card>
    ))};
  </Row>
</Container>
);
};
export default InvoicesList;