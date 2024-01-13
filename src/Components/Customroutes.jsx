import { Route, Routes } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import LoginForm from "./LoginForm";
import Home from "../Pages/Home";
import NotFound from "../Pages/PageNotFound";
import MainOut from "../layout/MainOut";
import SignupForm from "./Signup";

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
          path="/login"
          element={
            <MainOut>
              <LoginForm />
            </MainOut>
          }
        ></Route>
        <Route path="/signup" element={<SignupForm />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}
