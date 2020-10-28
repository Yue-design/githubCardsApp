import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, NavDropdown } from "react-bootstrap";

function Dropdown(props) {
  const [key, setKey] = useState({
    key: "home"
  });

  const handleSelect = key => {
    setKey({ key: key });
    alert(`selected ${key}`);
  };

  return (
    <Nav variant="tabs" activeKey="home" onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link eventKey="home" href="#/home">
          Home
        </Nav.Link>
        <NavDropdown title="About" id="nav-dropdown">
          <NavDropdown.Item eventKey="projects">Projects</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="blogs">Blogs</NavDropdown.Item>
        </NavDropdown>
      </Nav.Item>
    </Nav>
  );
}

export default Dropdown;
