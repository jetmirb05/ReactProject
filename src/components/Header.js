import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../src/assets/Disc Icon Music Studio Logo.png";
import { Link } from "react-router-dom";

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedin") === "true";
    setLoggedIn(isLoggedIn);

    if (isLoggedIn) {
      const currentUserEmail = localStorage.getItem("currentUserEmail");
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const currentUser = users.find((user) => user.email === currentUserEmail);
      setUsername(currentUser ? currentUser.username : "User");
    }
  }, []);

  const fontofAll = {
    fontFamily: "Mona Sans, sans-serif",
  };

  return (
    <Navbar expand="lg" style={{ height: "10vh", backgroundColor: "#F5F5F5" }}>
      <Container>
        <Navbar.Brand href="/" className="text-white" style={fontofAll}>
          <img
            src={logo}
            alt="Logo"
            style={{ height: "100px", width: "100px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={fontofAll} />
        <Navbar.Collapse id="basic-navbar-nav" style={fontofAll}>
          <Nav
            className="me-auto"
            style={{ ...fontofAll, display: "flex", gap: "10px" }}
          >
            <Link
              to="/"
              style={{ ...fontofAll, textDecoration: "none", color: "#03071E" }}
            >
              Home
            </Link>
            <Link
              to="/concerts"
              style={{ ...fontofAll, textDecoration: "none", color: "#03071E" }}
            >
              Concerts
            </Link>
            <Link
              to="/artists"
              style={{ ...fontofAll, textDecoration: "none", color: "#03071E" }}
            >
              Artists
            </Link>
          </Nav>
          <Nav className="ms-auto" style={fontofAll}>
            <NavDropdown
              title={loggedIn ? username : "Guest"}
              id="basic-nav-dropdown"
              style={fontofAll}
            >
              {loggedIn ? (
                <>
                  <NavDropdown.Item href="/dashboard" style={fontofAll}>
                    <Link
                      to="/dashboard"
                      style={{
                        ...fontofAll,
                        textDecoration: "none",
                        color: "#03071E",
                      }}
                    >
                      Dashboard
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/logout" style={fontofAll}>
                    <Link
                      to="/login"
                      onClick={() => {
                        localStorage.clear();
                        window.location.href = "/login";
                      }}
                      style={{
                        ...fontofAll,
                        textDecoration: "none",
                        color: "#03071E",
                      }}
                    >
                      Logout
                    </Link>
                  </NavDropdown.Item>
                </>
              ) : (
                <>
                  <NavDropdown.Item style={fontofAll}>
                    <Link
                      to="/register"
                      style={{
                        ...fontofAll,
                        textDecoration: "none",
                        color: "#03071E",
                      }}
                    >
                      Register
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/login" style={fontofAll}>
                    <Link
                      to="/login"
                      style={{
                        ...fontofAll,
                        textDecoration: "none",
                        color: "#03071E",
                      }}
                    >
                      Login
                    </Link>
                  </NavDropdown.Item>
                </>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
