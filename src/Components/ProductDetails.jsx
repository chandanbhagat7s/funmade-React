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
import { useLocation, useParams } from "react-router-dom";
import UncontrolledExample from "./UncontrolledExample";

export default function ProductDetails() {
  const { state } = useLocation();
  console.log(state);

  return (
    <>
      {
        <Container className="my-4">
          <Row>
            <Col md={6}>
              <UncontrolledExample images={state.Images} />
            </Col>

            <Col md={6}>
              <h2>{`${state.productName}`.toUpperCase()}</h2>
              <p className="">₹{state.price}</p>
              <p>{state.discription}</p>
              {/* Feature Boxes */}
            </Col>

            <Col md={6} className="my-2">
              <Row>
                {state.features.map((feature, i) => (
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
        </Container>
      }
    </>
  );
}
