import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  // Using useState hooks for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });
  const [loggedIn, setLoggedIn] = useState(() => {
    const isLogged = localStorage.getItem("loggedin");
    return isLogged ? JSON.parse(isLogged) : false;
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const ls_users = users.filter(
      (user) => user.email === email && user.password === password
    );

    if (ls_users.length) {
      setLoggedIn(true);
      localStorage.setItem("loggedin", JSON.stringify(true));
      window.location.href = "http://localhost:3000/dashboard";
    } else {
      alert("Invalid credentials and/or user does not exist");
      setLoggedIn(false);
      localStorage.setItem("loggedin", JSON.stringify(false));
    }
  };

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#F5F5F5",
        display: "flex",
        justifyContent: "center",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <Form
        style={{
          backgroundColor: "#F5F5F5",
          maxWidth: "500px",
          width: "100%",
          margin: "auto",
        }}
        onSubmit={handleLogin}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            style={{ width: "100%" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            style={{ width: "100%" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button
          style={{ backgroundColor: "#03071E", border: "1px solid #03071E" }}
          type="submit"
        >
          Log In
        </Button>
      </Form>
    </div>
  );
};

export default Login;
