import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function Nav({ dataNav, onFilter }) {
  const [busqueda, setBusqueda] = useState("");

  const handleChange = (e) => {
    const busqueda = e.target.value.toLowerCase();
    setBusqueda(busqueda);

    const filteredData = dataNav.filter(
      (b) =>
        b.name.toLowerCase().includes(busqueda) ||
        b.level.toLowerCase().includes(busqueda)
    );
    onFilter(filteredData);
  };

  return (
    <>
      <br />
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Digimon_Logo.svg"
        height="30"
        className="d-inline-block align-top mx-3"
        alt="Digimon Logo"
      />
    </Navbar.Brand>
          <Form.Control
            size="sm"
            type="text"
            value={busqueda}
            placeholder="Buscar por Nombre o Nivel"
            onChange={handleChange}
          />
        </Container>
      </Navbar>
    </>
  );
}

export default Nav;
