import "./App.css";
import Navi from "./layouts/Navi/Navi";
import { getUsers } from "./services/UserService";
import { useEffect } from "react";
import ApartmentAdd from "./pages/ApartmentAdd";
import InvoicesList from "./pages/InvoicesList";
import Login from "./pages/Login";
import UserAdd from "./pages/UserAdd";
import InvoicesAdd from "./pages/InvoicesAdd";
import UserList from "./pages/ListPages/UserList";
import ApartmentList from "./pages/ListPages/ApartmentList";

function App() {
  return (
    <div className="App">
      <Navi />
      {/*
      <InvoicesList />
      <ApartmentAdd />
      <UserAdd />
      <InvoicesAdd />
      <UserList />
      <ApartmentList /> */}
      <Login />
    </div>
  );
}

export default App;
