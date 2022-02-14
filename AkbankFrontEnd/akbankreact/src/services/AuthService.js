import axios from "axios";
export default class AuthService {
  addUser = (data) => {
    return axios.post("https://localhost:7202/api/Auth/register", data);
  };
}
