import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Link to="/" className="navbar-brand">
          홈
        </Link>
        <Nav className="mr-auto">
          <Link to="/post" className="nav-link">
            글쓰기
          </Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
