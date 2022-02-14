import axios from "axios";
export default class InvoicesService {
  getInvoices = () => {
    return axios.get("https://localhost:7202/api/Invoices/getall");
  };

  getInvoicesByApartmentId = (id) => {
    return axios.get(
      "https://localhost:7202/api/Invoices/getallbyapartmentid?apartmentId=1",
      1
    );
  };

  deleteInvoices = () => {
    return axios
      .delete(`https://localhost:7202/api/Invoicess/delete`)
      .then((res) => {
        console.log(res.data);
      });
  };

  addInvoices = (data) => {
    return axios.post("https://localhost:7202/api/Invoicess/add", data);
  };
  updateInvoices = (id, data) => {
    return axios
      .put(`https://localhost:7202/api/Invoicess/update/${id}`, data)
      .then((response) =>
        this.setState({ updatedAt: response.data.updatedAt })
      );
  };

  getById = (id) => {
    return axios
      .get(`https://localhost:7202/api/Invoicess/getbyid/${id}`)
      .then((res) => {
        const invoices = res.data.data;
      });
  };
}
