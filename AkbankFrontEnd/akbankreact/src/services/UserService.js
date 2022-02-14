import axios from "axios";
export default class UserService {
  getUsers = () => {
    return axios.get(`https://localhost:7202/api/Users/getall`);
  };

  addUser = (data) => {
    return axios
      .post(`https://localhost:7202/api/Users/add`, data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  deleteUser = (id) => {
    return axios
      .delete(`https://localhost:7202/api/Users/delete/${id}`)
      .then((res) => {
        console.log(res.data);
      });
  };

  updateUser = (id, data) => {
    return axios
      .put(`https://localhost:7202/api/Users/update/${id}`, data)
      .then((response) =>
        this.setState({ updatedAt: response.data.updatedAt })
      );
  };

  getById = (id) => {
    return axios
      .get(`https://localhost:7202/api/Users/getbyid/${id}`)
      .then((res) => {
        const users = res.data.data;
      });
  };
}
