import { useContext, useState } from "react";
import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import MainOut from "../layout/MainOut";
import setLoadingContxt from "../Context/setLoadingContxt";
// import { showMessageWarning } from "./warning";

function SignupForm() {
  const { setError } = useContext(setLoadingContxt);
  const [signupdata, setSignupdata] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(e);
    const { name, value } = e.target;
    console.log(name, value, signupdata);
    setSignupdata({
      ...signupdata,
      [name]: value,
    });
  };
  function createNewAccount(e) {
    e.preventDefault();
    if (
      !signupdata.email ||
      !signupdata.password ||
      !signupdata.mobile ||
      !signupdata.name
    ) {
      setError({ type: "warning", message: "please fill all the details " });
    }

    if (signupdata.name.length < 2) {
      setError({
        type: "warning",
        message: "Name to be atleast of 2 character ",
      });
    }
    if (
      signupdata.email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setError({ type: "warning", message: "Enter valid email address" });
    }
  }

  return (
    <MainOut>
      <Container className="my-5">
        <Row>
          {/* Left-side box with random image */}
          <Col md={6}>
            <Image
              src="https://placekitten.com/200/200?image=1"
              alt="Random Image"
              fluid
            />
          </Col>

          {/* Right-side box with signup form */}
          <Col md={6}>
            <Form onSubmit={createNewAccount}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  value={signupdata.name}
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  value={signupdata.email}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  value={signupdata.password}
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                />
              </Form.Group>

              <Form.Group controlId="formMobile">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  value={signupdata.mobile}
                  type="tel"
                  placeholder="Enter your mobile number"
                  name="mobile"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </MainOut>
  );
}

export default SignupForm;
