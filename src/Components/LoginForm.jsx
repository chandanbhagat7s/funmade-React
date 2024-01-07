import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";

const LoginForm = () => {
  return (
    <Card className="mx-auto" style={{ maxWidth: "80vw" }}>
      <Container className="my-4">
        <Row>
          <Col md={6}>
            <Card.Img
              variant="left"
              src={`https://placekitten.com/200/200?image=1`}
              alt={`Product `}
              style={{ height: "50vh", objectFit: "cover" }}
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Form>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default LoginForm;
