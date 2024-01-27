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
  Stack,
  ListGroup,
} from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import UncontrolledExample from "./UncontrolledExample";
import { FaRegStar, FaRegStarHalf } from "react-icons/fa6";
// import { FaStarHalfAlt } from "react-icons/fa";
// export default function ProductDetails() {

//   return (
//     <>

//       {
//         <Container className="my-4">
//           <Row>
//             <Col md={6}>
//               <UncontrolledExample images={state.Images} />
//             </Col>

//             <Col md={6}>
//               <h2>{`${state.productName}`.toUpperCase()}</h2>
//               <p className="">₹{state.price}</p>
//               <p>{state.discription}</p>
//               {/* Feature Boxes */}
//             </Col>

//             <Col md={6} className="my-2">
//               <Row>
//                 {state.features.map((feature, i) => (
//                   <Col key={i} md={6} className="mb-3">
//                     <div className="border p-3">
//                       <h6> {feature}</h6>
//                     </div>
//                   </Col>
//                 ))}
//               </Row>
//             </Col>
//           </Row>
//           {/* Accordion for Images */}
//           <Accordion className="my-4">
//             <Card>
//               {/* <Accordion.Toggle as={Card.Header} eventKey="0">
//               Product Images
//             </Accordion.Toggle> */}
//               <Accordion.Collapse eventKey="0">
//                 <Card.Body>
//                   <Row>
//                     {[1, 2, 3].map((image) => (
//                       <Col key={image} md={4} className="mb-3">
//                         <Image
//                           src={`https://placekitten.com/200/200?image=${image}`}
//                           alt={`Image ${image}`}
//                           fluid
//                         />
//                       </Col>
//                     ))}
//                   </Row>
//                 </Card.Body>
//               </Accordion.Collapse>
//             </Card>
//           </Accordion>
//         </Container>
//       }
//     </>
//   );
// }

const ProductDetails = () => {
  const { state } = useLocation();
  console.log(state);

  return (
    <Container>
      <Row>
        <Col
          style={{
            height: "90vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <UncontrolledExample images={state.Images} />
        </Col>
        <Col
          style={{
            height: "90vh",
            overflow: "scroll",
          }}
        >
          <Stack gap={2} className="text-center mt-4">
            <div className="p-2 h1">{`${state.productName}`.toUpperCase()}</div>
            <div className=" ">{state.discription}</div>
            <div className="fs-5 text-danger font-weight-bold">Price</div>
            <div className=" h1">{state.price}₹</div>
            <div className="fs-5 text-danger font-weight-bold">Ratings</div>
            <div className=" h1">
              {Array(Math.floor(state.avgRating))
                .fill("")
                .map((el, i) => {
                  return <FaRegStar key={i} />;
                })}
              {state.avgRating % 10 && <FaRegStarHalf />}
            </div>
            <div className="mx-auto">
              <div className="fs-5 text-danger font-weight-bold">
                Dimentions
              </div>
              <Stack direction="horizontal" gap={3}>
                <div className="p-2 d-flex flex-column">
                  <div className="fs-5 mb-1 font-weight-bold">length</div>
                  <div className="p-1 bg-dark text-white rounded bg-gradient">
                    {state.dim[0]}
                  </div>
                </div>
                <div className="p-2">
                  <div className="fs-5 mb-1 font-weight-bold">Breadth</div>
                  <div className="p-1 bg-dark text-white rounded bg-gradient">
                    {state.dim[1]}
                  </div>
                </div>
                <div className="p-2">
                  <div className="fs-5 mb-1 font-weight-bold">Height</div>
                  <div className="p-1 bg-dark text-white rounded bg-gradient">
                    {state.dim[2]}
                  </div>
                </div>
              </Stack>
            </div>

            <div className="mx-auto">
              <div className="fs-5 text-danger font-weight-bold">
                Available in color
              </div>
              <Stack direction="horizontal" gap={3}>
                {state.colors.map((el, i) => {
                  return (
                    <div className="p-2 d-flex flex-column" key={i}>
                      <div className="p-1  fs-4  ">{`${el}`.toUpperCase()}</div>
                    </div>
                  );
                })}
              </Stack>
            </div>

            <div>
              <div className="fs-5 text-danger font-weight-bold mb-2">
                Features
              </div>
              <ListGroup variant="flush" className="my-3">
                {state.features.map((el, i) => {
                  return <ListGroup.Item key={i}>{el}</ListGroup.Item>;
                })}
              </ListGroup>
            </div>

            <div className="fs-5 my-2text-danger font-weight-bold">About</div>
            <div>{state.about}</div>

            <div className="fs-5 my-2text-danger font-weight-bold">Summery</div>
            <div>{state.summery}</div>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
