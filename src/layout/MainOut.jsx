import { useDispatch, useSelector } from "react-redux";
import NavScrollExample from "../Components/Navigation";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Footer from "../Components/Footer";
import BasicExampleS from "../Components/BasicExampleS";
import { useContext, useEffect, useState } from "react";
import setLoadingContxt from "../Context/setLoadingContxt";
import SearchDetails from "../Pages/SearchDetails";
import MessageComponent from "../Components/warning";
import { logoutFromAccount } from "../Redux/Slices/AuthSlice";
let DisplayMsg;

export default function MainOut({ children }) {
  const data = useSelector((state) => {
    // console.log(state);
    return state.auth;
  });
  const { loading, search, error, setError } = useContext(setLoadingContxt);
  const [display, setDisplay] = useState(true);

  const dispatch = useDispatch();
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
    } else if (error.type == "primary") {
      DisplayMsg = MessageComponent().primary(error.message);
    } else if (error.type == "secondary") {
      DisplayMsg = MessageComponent().secondary(error.message);
    } else if (error.type == "success") {
      DisplayMsg = MessageComponent().success(error.message);
    } else if (error.type == "info") {
      DisplayMsg = MessageComponent().info(error.message);
    } else if (error.type == "light") {
      DisplayMsg = MessageComponent().light(error.message);
    } else if (error.type == "dark") {
      DisplayMsg = MessageComponent().dark(error.message);
    }
  }

  async function handleLogout() {
    const res = await dispatch(logoutFromAccount());
    if (res?.payload?.data.status == "success") {
      setError({ type: "dark", message: "logged out successfully " });
    } else {
      setError({ type: "danger", message: "failed to logged out   " });
    }
  }
  return (
    <>
      {(display || error.message) && error.message && DisplayMsg}
      <NavScrollExample>
        {data.loggedin ? (
          <>
            <Link to={"/profile"}>
              <Button variant="outline-success ">Profile</Button>
            </Link>

            <Link onClick={handleLogout}>
              <Button variant="outline-danger">Logout</Button>
            </Link>
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
