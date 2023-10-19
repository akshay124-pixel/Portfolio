import React from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const formStyle = {
  margin: "2rem",
  padding: "2rem",
  border: "1px solid #ddd",
  borderRadius: "5px",
};

const headingStyle = {
  textAlign: "center",
};
const styles1 = {
  customFont1: {
    fontFamily: "'Acme', sans-serif",
  },
};
const buttonStyles = {
  bn632Hover: {
    width: "160px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#fff",
    cursor: "pointer",
    margin: "20px",
    height: "55px",
    textAlign: "center",
    border: "none",
    backgroundSize: "300% 100%",
    borderRadius: "50px",
    MozTransition: "all .4s ease-in-out",
    OTransition: "all .4s ease-in-out",
    WebkitTransition: "all .4s ease-in-out",
    transition: "all .4s ease-in-out",
  },
  bn632HoverHover: {
    backgroundPosition: "100% 0",
    MozTransition: "all .4s ease-in-out",
    OTransition: "all .4s ease-in-out",
    WebkitTransition: "all .4s ease-in-out",
    transition: "all .4s ease-in-out",
  },
  bn632HoverFocus: {
    outline: "none",
  },
  bn632HoverBn23: {
    backgroundImage:
      "linear-gradient(to right, #009245, #fcee21, #00a8c5, #d9e021)",
    boxShadow: "0 4px 15px 0 rgba(83, 176, 57, 0.75)",
  },
};
function ContactForm() {
  return (
    <Form style={formStyle}>
      <h1 style={styles1.customFont1}>Contact</h1>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={4} placeholder="Your message" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;
