import { useSelector } from "react-redux";
import NavScrollExample from "../Components/Navigation";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Footer from "../Components/Footer";
import SetLoadingContxt from "../Context/setLoadingContxt";
import BasicExampleS from "../Components/BasicExampleS";
import { useContext, useEffect, useState } from "react";
import Allproducts from "../Components/Allproducts";
import setLoadingContxt from "../Context/setLoadingContxt";
import SearchDetails from "../Pages/SearchDetails";
export default function MainOut({ children }) {
  const data = useSelector((state) => {
    // console.log(state);
    return state.auth;
  });
  const { loading, search } = useContext(setLoadingContxt);

  // const [search, setSearch] = useState();
  // const { loading } = useContext(setLoadingContxt);
  // useEffect(() => {}, [search]);

  return (
    <>
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
            <Button variant="outline-primary">SignUp</Button>
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
