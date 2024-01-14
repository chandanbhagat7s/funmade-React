import { useSelector } from "react-redux";
import NavScrollExample from "../Components/Navigation";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Footer from "../Components/Footer";
import BasicExampleS from "../Components/BasicExampleS";
import { useContext, useEffect, useState } from "react";
import setLoadingContxt from "../Context/setLoadingContxt";
import SearchDetails from "../Pages/SearchDetails";
import MessageComponent from "../Components/warning";
let DisplayMsg;

export default function MainOut({ children }) {
  const data = useSelector((state) => {
    // console.log(state);
    return state.auth;
  });
  const { loading, search, error, setError } = useContext(setLoadingContxt);
  const [display, setDisplay] = useState(true);

  // const [search, setSearch] = useState();
  // const { loading } = useContext(setLoadingContxt);
  // useEffect(() => {}, [error]);

  if (error.type) {
    display &&
      setTimeout(() => {
        setDisplay(false);
        setError({ ...error, message: "" });
      }, 4000);
    error.message &&
      setTimeout(() => {
        setError({ ...error, message: "" });
      }, 4000);
    if (error.type == "warning") {
      DisplayMsg = MessageComponent().warning(error.message);
    } else if (error.type == "danger") {
      DisplayMsg = MessageComponent().danger(error.message);
    }
  }

  return (
    <>
      {(display || error.message) && error.message && DisplayMsg}
      <NavScrollExample>
        {data.loggedin ? (
          <>
            <Link to={`/profile`}>
              <Button variant="outline-success ">Profile</Button>
            </Link>
            <Button variant="outline-danger">Logout</Button>
          </>
        ) : (
          <>
            <Link to={`/login`}>
              <Button variant="outline-success ">Login</Button>
            </Link>
            <Link to={`/signup`}>
              <Button variant="outline-primary">SignUp</Button>
            </Link>
          </>
        )}
      </NavScrollExample>

      {search && <SearchDetails />}
      {loading && <BasicExampleS key={loading} />}

      {!search && children}

      <Footer />
    </>
  );
}
