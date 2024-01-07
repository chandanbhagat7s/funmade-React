import axios from "axios";
import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Accordion,
  Card,
  Image,
  Button,
  Form,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import UncontrolledExample from "./UncontrolledExample";
import BasicExampleS from "./BasicExampleS";

export default function ProductDetails() {
  const [data, setData] = useState({});
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [loading, setLoding] = useState(true);
  const param = useParams();
  //   console.log( );

  async function downlodeProductData() {
    const dataP = await axios.get(
      `http://127.0.0.1:3000/api/v1/product/getByName/${param.name}`
    );
    console.log(dataP);
    console.log(dataP.data.data.product);
    setData({ ...dataP.data.data.product[0] });
    setLoding(false);
  }
  useEffect(() => {
    downlodeProductData();
  }, []);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, { text: reviewText, id: reviews.length + 1 }]);
    setReviewText("");
  };
  return (
    <>
      {loading ? (
        <>
          <div
            style={{
              display: "flex",
              height: "100vh",
              width: "100vw",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BasicExampleS />
          </div>
        </>
      ) : (
        <Container className="my-4">
          <Row>
            <Col md={6}>
              {console.log(data.Images)}
              <UncontrolledExample images={data.Images} />
            </Col>

            <Col md={6}>
              <h2>{`${data.productName}`.toUpperCase()}</h2>
              <p className="">₹{data.price}</p>
              <p>{data.discription}</p>
              {/* Feature Boxes */}
              {console.log(data)}
            </Col>

            <Col md={6} className="my-2">
              {console.log(data)}
              <Row>
                {data.features.map((feature, i) => (
                  <Col key={i} md={6} className="mb-3">
                    <div className="border p-3">
                      <h6> {feature}</h6>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>

          {/* Accordion for Images */}
          <Accordion className="my-4">
            <Card>
              {/* <Accordion.Toggle as={Card.Header} eventKey="0">
              Product Images
            </Accordion.Toggle> */}
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Row>
                    {[1, 2, 3].map((image) => (
                      <Col key={image} md={4} className="mb-3">
                        <Image
                          src={`https://placekitten.com/200/200?image=${image}`}
                          alt={`Image ${image}`}
                          fluid
                        />
                      </Col>
                    ))}
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          {/* Reviews */}
          <h3>Customer Reviews</h3>
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>{review.text}</li>
            ))}
          </ul>

          {/* Posting Review Form */}
          <h4>Write a Review</h4>
          <Form onSubmit={handleReviewSubmit}>
            <Form.Group controlId="reviewText">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Write your review here..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              />
            </Form.Group>
            <Button type="submit">Submit Review</Button>
          </Form>
        </Container>
      )}
    </>
  );
}
