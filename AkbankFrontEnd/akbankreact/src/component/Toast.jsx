import { ToastContainer, Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const CustomToast = () => {
  return (
    <ToastContainer position="bottom-end">
      <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="me-2 rounded" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small className="text-muted">just now</small>
        </Toast.Header>
        <Toast.Body>EKLENDİ</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};
export default CustomToast;
