import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const alertMessage = `
      Name: ${formData.name}
      Email: ${formData.email}
      Message: ${formData.message}
    `;

    window.alert(alertMessage);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Container className="my-5 d-flex justify-content-center">
      <Card className="shadow-lg border-0 w-50">
        <Card.Body>
          <Card.Title className="text-center mb-4">
            <h2>Contact Me</h2>
          </Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name..." required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email..." required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Write your message..." required />
            </Form.Group>

            <div className="text-center">
              <Button type="submit" variant="primary">
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default Contact;
