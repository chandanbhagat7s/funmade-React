import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import useDebounce from "../Utility/useDebounce";
import { useContext } from "react";
import setLoadingContxt from "../Context/setLoadingContxt";

function NavScrollExample({ children }) {
  const { setSearch, search } = useContext(setLoadingContxt);
  const delayIt = useDebounce((e) => {
    setSearch(e.target.value);
  }, 2000);
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary pt-3 pb-3"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container fluid>
        <Link to={`/`}>
          <Navbar.Brand>FurMade</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
          </Nav>

          <Stack direction="horizontal" gap={3}>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search for product "
                className="me-2"
                aria-label="Search"
                onChange={(e) => delayIt(e)}
              />
            </Form>
            {children}
          </Stack>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
