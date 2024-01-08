// Footer.js

import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Your Company</h5>
            <p>&copy; 2024 All rights reserved.</p>
          </Col>
          <Col md={6}>
            <h5>Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
