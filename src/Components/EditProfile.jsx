import { Button, Card, Col, Container, Row } from "react-bootstrap";
// import { Form } from "react-router-dom";
import Form from "react-bootstrap/Form";
import MainOut from "../layout/MainOut";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { getCartData } from "../Redux/Slices/productslice";
import { removeFromCart } from "../Redux/Slices/AuthSlice";
import { useContext, useEffect, useState } from "react";
import setLoadingContxt from "../Context/setLoadingContxt";
import axios from "axios";

export default function EditProfile() {
  const { setError } = useContext(setLoadingContxt);

  const [product, setProduct] = useState([]);
  let data = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  async function bring() {
    if (data?.data?.userCart?.length > 0) {
      let d = await dispatch(getCartData(data?.data?.userCart));
      console.log(d);
      setProduct([...d.payload]);
    } else {
      setProduct([]);
    }
  }

  async function removeFC(productName) {
    try {
      const res = await dispatch(removeFromCart(productName));
      if (res.payload.data.status == "success") {
        setError({
          message: "product removed from cart successfully",
          type: "dark",
        });
      }
    } catch (error) {
      setError({
        message: error.response.data.msg,
        type: "danger",
      });
    }
  }
  useEffect(() => {
    bring();
  }, [data]);

  return (
    <>
      <MainOut>
        <Card className="mx-auto" style={{ maxWidth: "80vw" }}>
          <Container className="my-4">
            <Row>
              <Col md={6}>
                <Card.Img
                  variant="left"
                  src={`https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg`}
                  alt={`Product `}
                  style={{ height: "50vh", objectFit: "cover" }}
                />
              </Col>
              <Col md={6}>
                <Card.Body>
                  <Form>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        //   onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        // onChange={handleChange}
                      />
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
        <Container className="my-4">
          <Row>
            {product.length > 0 &&
              product.map((el) => {
                return (
                  <Product key={el._id} product={el}>
                    {
                      <Button
                        className="mx-4"
                        variant="secondary"
                        onClick={() => removeFC(el.productName)}
                      >
                        Remove from Cart
                      </Button>
                    }
                  </Product>
                );
              })}
          </Row>
        </Container>
      </MainOut>
    </>
  );
}
