import { useContext, useState } from "react";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import setLoadingContxt from "../Context/setLoadingContxt";
import { useDispatch } from "react-redux";
import { LoginIntoAccount } from "../Redux/Slices/AuthSlice";

const LoginForm = () => {
  const neviagate = useNavigate();

  const { setError } = useContext(setLoadingContxt);
  const [logindata, setLogindata] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    const { name, value } = e.target;
    // console.log(name, value, signupdata);
    setLogindata({
      ...logindata,
      [name]: value,
    });
  };
  async function loginIn(e) {
    e.preventDefault();
    console.log(logindata);
    if (!logindata.email || !logindata.password) {
      setError({ type: "warning", message: "please fill all the details " });
      return;
    }

    if (
      !logindata.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ) {
      setError({ type: "warning", message: "Enter valid email address" });
      return;
    }

    const response = await dispatch(LoginIntoAccount(logindata));
    if (response?.payload?.data?.status == "success") {
      neviagate("/");
    } else {
      console.log("came");
      setError({
        type: "danger",
        message: response.payload.msg,
      });
    }
    setLogindata({
      email: "",

      password: "",
    });
    console.log(response);
  }
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
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={loginIn}>
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
