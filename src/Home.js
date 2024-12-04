import React from "react";
import { Container, Button } from "react-bootstrap";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container fluid className="hero-section d-flex align-items-center text-center text-white" style={{ minHeight: "92vh", backgroundImage: `url('your-image-url.jpg')`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="hero-text mx-auto">
        <h1 className="display-4">Welcome to My Profile App</h1>
        <p className="lead">Want to know more?</p>
        <Link to="/about">
          <Button variant="primary" size="lg">
            Click Here!
          </Button>
        </Link>
      </div>
    </Container>
  );
}

export default Home;
