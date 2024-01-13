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
let displayMessage;

export default function MainOut({ children }) {
  const data = useSelector((state) => {
    // console.log(state);
    return state.auth;
  });
  const { loading, search, error } = useContext(setLoadingContxt);

  // const [search, setSearch] = useState();
  // const { loading } = useContext(setLoadingContxt);
  // useEffect(() => {}, [search]);

  useEffect(() => {}, [error]);
  if (error.type == "warning") {
    displayMessage = MessageComponent().warning(error.message);
  }

  return (
    <>
      {displayMessage}
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
