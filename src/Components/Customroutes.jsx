import { Route, Routes } from "react-router-dom";
import Allproducts from "./Allproducts";
import ProductDetails from "./ProductDetails";
import LoginForm from "./LoginForm";

export default function Customroutes({ search }) {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            search ? (
              ""
            ) : (
              <Allproducts url="http://127.0.0.1:3000/api/v1/product" />
            )
          }
        ></Route>
        <Route path="/product/:name" element={<ProductDetails />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
      </Routes>
    </>
  );
}
