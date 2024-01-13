import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
export default function Product({ data }) {
  return (
    <>
      <Col md={4} className="mb-4">
        <Card>
          <Card.Img
            variant="top"
            src={`http://127.0.0.1:3000/images/product/${data.productName}_cover.jpg`}
            alt={`Product ${data._id}`}
            style={{ height: "50vh", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>{data.productName}</Card.Title>
            <Card.Text>Price: Rs {data.price}</Card.Text>
            <Link to={`/product/${data.productName}`}>
              <Button variant="secondary">View Details</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
