import { Table, Button } from "react-bootstrap";
import ApartmentService from "../../services/ApartmentService";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/List.css";
import React, { useState, useEffect } from "react";
const ApartmentList = () => {
  const [apartments, setApartments] = useState([]);
  useEffect(() => {
    let apartmentService = new ApartmentService();
    apartmentService
      .getApartments()
      .then((result) => setApartments(result.data.data));
  }, []);

  return (
    <div className="tableList">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Daire Numarası</th>
            <th>Daire Bloğu</th>
            <th>Daire Tipi</th>
            <th>Daire Katı</th>
          </tr>
        </thead>
        <tbody>
          {apartments.map((apartment) => (
            <tr key={apartment.id}>
              <td>{apartment.apartment_Number}</td>
              <td>{apartment.block}</td>
              <td>{apartment.type}</td>
              <td>{apartment.floor}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default ApartmentList;
