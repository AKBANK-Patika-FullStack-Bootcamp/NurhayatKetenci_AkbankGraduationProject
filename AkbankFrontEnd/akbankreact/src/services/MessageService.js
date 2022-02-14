import axios from "axios";
export default class MessagesService {
  getMessages = () => {
    return axios
      .get(`https://localhost:7202/api/Messages/getall`)
      .then((res) => {
        const message = res.data.data;
      });
  };

  getMessageDetail = () => {
    return axios
      .get(`https://localhost:7202/api/Messages/messagedetaildto`)
      .then((res) => {
        const message = res.data.data;
      });
  };

  deleteMessage = () => {
    return axios
      .delete(`https://localhost:7202/api/Messages/delete`)
      .then((res) => {
        console.log(res.data);
      });
  };
  addMessage = (data) => {
    return axios
      .post(`https://localhost:7202/api/Messages/add`, data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  updateMessage = (id, data) => {
    return axios
      .put(`https://localhost:7202/api/Messages/update/${id}`, data)
      .then((response) =>
        this.setState({ updatedAt: response.data.updatedAt })
      );
  };

  getById = (id) => {
    return axios
      .get(`https://localhost:7202/api/Messages/getbyid/${id}`)
      .then((res) => {
        const message = res.data.data;
      });
  };
}
