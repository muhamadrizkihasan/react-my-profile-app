import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import img from "./images/kiki.png";

function About() {
  return (
    <Container className="my-5 d-flex justify-content-center">
      <Card className="shadow-lg border-0 w-50">
        <Row className="g-0 align-items-center">
          <Col md={6}>
            <Card.Body>
              <Card.Title className="mb-4">
                <h1>About Me</h1>
              </Card.Title>
              <Card.Text>
                <p>
                  <strong>Name:</strong> M. Rizki Hasan
                </p>
                <p>
                  <strong>Age:</strong> 18 years old
                </p>
                <p>
                  <strong>School:</strong> SMK Wikrama Bogor
                </p>
                <p>
                  <strong>Hoby:</strong> Runing, and Coding
                </p>
              </Card.Text>
            </Card.Body>
          </Col>

          <Col md={6}>
            <Image src={img} alt="Profile" fluid rounded className="p-3" />
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
export default About;
