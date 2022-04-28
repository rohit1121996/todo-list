/** @format */

import React from "react";
import { Navbar, Container } from "react-bootstrap";
export default function NavbarComponent() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={"./todo-icon-5.jpg"}
              width="100"
              height="50"
              className="d-inline-block align-top"
            />{" "}
            Todo List
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
