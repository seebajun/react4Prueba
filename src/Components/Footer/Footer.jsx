import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import React from "react";

const Footer = () => {
  return (
    <div className="footerCss">
      <Navbar expand="lg" bg="dark" variant="dark" className="w-100">
        <Container>
          <Navbar.Brand
            href="https://digimon-api.vercel.app/"
            className="mx-auto"
          >
            Clickeame para saber mas sobre la Api de{" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Digimon_Logo.svg"
              height="30"
              className="d-inline-block align-top mx-3"
              alt="Digimon Logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
