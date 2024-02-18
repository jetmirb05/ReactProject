import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { redirect } from "react-router-dom";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

function Register() {
  const [users, setUsers] = useLocalStorage("users", []);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const user = {
      id: uuidv4(),
      username: form.username.value,
      email: form.email.value,
      password: form.password.value,
    };

    setUsers([...users, user]);

    window.location.href = "http://localhost:3000/login";
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
        onSubmit={handleRegister}
        style={{
          backgroundColor: "#F5F5F5",
          maxWidth: "500px",
          width: "100%",
          margin: "auto",
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="username" // Added name attribute
            style={{ width: "100%" }}
          />
          <Form.Text className="text-muted">
            We'll never share your username with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email" // Added name attribute
            style={{ width: "100%" }}
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
            name="password" // Added name attribute
            style={{ width: "100%" }}
          />
        </Form.Group>

        <Button
          style={{ backgroundColor: "#03071E", border: "1px solid #03071E" }}
          type="submit"
        >
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;
