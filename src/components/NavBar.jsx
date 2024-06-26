import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const cartProducts = useSelector((state) => state.cart);

  return (
    <div>
      <Navbar expand="lg" bg="light">
        <Container fluid>
          <Navbar.Brand to="/" as={Link} style={{ fontWeight: "bolder" }}>
            Redux-Ecommerce
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/" as={Link} style={{ fontWeight: "bolder" }}>
              Home
            </Nav.Link>
          </Nav>
          <Navbar.Text style={{ fontWeight: "bolder" }}>
            <Nav.Link to="/cart" as={Link}>
              My Bag: {cartProducts.length}
            </Nav.Link>
          </Navbar.Text>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
