import axios from "axios";

export default class ApartmentService {
  getApartments = () => {
    return axios.get(`https://localhost:7202/api/Apartments/getall`);
  };

  getapartmentdetails = () => {
    return axios.get(
      `https://localhost:7202/api/Apartments/getapartmentdetails`
    );
  };

  deleteApartment = () => {
    return axios
      .delete(`https://localhost:7202/api/Apartments/delete`)
      .then((res) => {
        console.log(res.data);
      });
  };
  addApartment = (data) => {
    return axios.post("https://localhost:7202/api/Apartments/add", data);
  };
  updateApartment = (id, data) => {
    return axios
      .put(`https://localhost:7202/api/Apartments/update/${id}`, data)
      .then((response) =>
        this.setState({ updatedAt: response.data.updatedAt })
      );
  };

  getById = (id) => {
    return axios
      .get(`https://localhost:7202/api/Apartments/getbyid/${id}`)
      .then((res) => {
        const apartment = res.data.data;
      });
  };
  getByApartmentNumber = (id) => {
    return axios.get(
      "https://localhost:7202/api/Apartments/getbyapartmentid?id=" + id
    );
  };
}
