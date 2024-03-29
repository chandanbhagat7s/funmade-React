import { Route, Routes } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import LoginForm from "./LoginForm";
import Home from "../Pages/Home";
import NotFound from "../Pages/PageNotFound";
import MainOut from "../layout/MainOut";
import SignupForm from "./Signup";
import AccessDenide from "./AccessDenide";
import Authentication from "./Auth/Authentication";
import CreateProduct from "./Createcourse";
import EditProfile from "./EditProfile";

export default function Customroutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route
          path="/product/:name"
          element={
            <MainOut>
              <ProductDetails />
            </MainOut>
          }
        ></Route>
        <Route
          path="/product/discription"
          element={
            <MainOut>
              <ProductDetails />
            </MainOut>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <MainOut>
              <LoginForm />
            </MainOut>
          }
        ></Route>
        <Route path="/signup" element={<SignupForm />}></Route>
        <Route path="/denide" element={<AccessDenide />}></Route>

        <Route element={<Authentication allow={["ADMIN"]} />}>
          <Route path="/createProduct" element={<CreateProduct />}></Route>
        </Route>

        {/* <Route element={<Authentication allow={["ADMIN", "USER"]} />}> */}
        <Route path="/profile" element={<EditProfile />}></Route>
        {/* </Route> */}

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}
