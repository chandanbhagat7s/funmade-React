import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
export default function Product({ product, children }) {
  const { loggedin, data } = useSelector((state) => state.auth);
  const nevigate = useNavigate();
  return (
    <>
      <Col md={4} className="mb-4">
        <Card>
          <Card.Img
            variant="top"
            src={`http://127.0.0.1:3000/images/product/${product.productName}_cover.jpg`}
            alt={`Product ${product._id}`}
            style={{ height: "50vh", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>{product.productName}</Card.Title>
            <Card.Text>Price: Rs {product.price}</Card.Text>
            {/* <Link to={`/product/${product.productName}`}> */}
            <Button
              variant="dark"
              onClick={() =>
                nevigate("/product/discription", { state: { ...product } })
              }
            >
              View Details
            </Button>
            {loggedin && children}
            {/* </Link> */}
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
