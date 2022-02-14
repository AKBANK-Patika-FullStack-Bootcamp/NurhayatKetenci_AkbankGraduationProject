import { Table, Button } from "react-bootstrap";
import ApartmentService from "../../services/ApartmentService";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/List.css";
import React, { useState, useEffect } from "react";
import UserService from "../../services/UserService";
const UserList = () => {
  let userService = new UserService();
  let apartmentService = new ApartmentService();
  const [apartments, setApartments] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getUsers().then((result) => setUsers(result.data.data));
  }, []);
  return (
    <div className="tableList">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Ad</th>
            <th>Soyad</th>
            <th>Tc Numarası</th>
            <th>E posta</th>
            <th>Telefon Numarası</th>
            <th>Sahiplik Durumu</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.first_Name}</td>
              <td>{user.last_Name}</td>
              <td>{user.identity_Number}</td>
              <td>{user.email}</td>
              <td>{user.phone_Number}</td>
              <td>{user.apartment_Information}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default UserList;
