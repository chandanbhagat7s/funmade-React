import { useContext, useState } from "react";
import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import MainOut from "../layout/MainOut";
import setLoadingContxt from "../Context/setLoadingContxt";
import { createAccount } from "../Redux/Slices/AuthSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { showMessageWarning } from "./warning";

function SignupForm() {
  const neviagate = useNavigate();
  const { setError } = useContext(setLoadingContxt);
  const [signupdata, setSignupdata] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    const { name, value } = e.target;
    // console.log(name, value, signupdata);
    setSignupdata({
      ...signupdata,
      [name]: value,
    });
  };
  async function createNewAccount(e) {
    e.preventDefault();
    if (
      !signupdata.email ||
      !signupdata.password ||
      !signupdata.mobile ||
      !signupdata.name
    ) {
      setError({ type: "warning", message: "please fill all the details " });
      return;
    }

    if (signupdata.name.length < 2) {
      setError({
        type: "warning",
        message: "Name to be atleast of 2 character ",
      });
      return;
    }
    if (
      !signupdata.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ) {
      setError({ type: "warning", message: "Enter valid email address" });
      return;
    }
    if (
      !signupdata.password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
    ) {
      setError({
        type: "warning",
        message:
          ": Requires a minimum length of 8 characters,Requires at least one special character among @, $, !, %, *, ?, or &. , Requires at least one digit , : Requires at least one uppercase letter  Requires at least one lowercase letter.",
      });
      return;
    }

    if (signupdata.mobile.length < 10) {
      setError({ type: "warning", message: "Enter valid mobile number " });
      return;
    }

    const response = await dispatch(createAccount(signupdata));
    if (response?.payload?.data?.status == "success") {
      neviagate("/");
    } else {
      console.log("came");
      setError({
        type: "danger",
        message: response.payload.msg,
      });
    }

    setSignupdata({
      name: "",
      email: "",
      mobile: "",
      password: "",
    });
    console.log(response);
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
