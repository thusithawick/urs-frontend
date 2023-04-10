import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

/**
 * Home component
 * @returns JSX
 */
const Home = () => {
  
  return (
    <div>
      <div className="hero-image d-flex align-items-center">
        <Container className="text-center">
          <h1 className="text-white">User Registration System</h1>
          <p className="text-white">Register or Login to get started</p>
          <Link to="/register">
            <Button variant="primary">Register</Button>
          </Link>
          <Link to="/login" className="ms-2">
            <Button variant="warning">Login</Button>
          </Link>
        </Container>
      </div>
    </div>
  );
};

export default Home;
