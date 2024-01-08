import { Route, Routes } from "react-router-dom";
import Allproducts from "./Allproducts";
import ProductDetails from "./ProductDetails";
import LoginForm from "./LoginForm";
import Home from "../Pages/Home";
import SearchDetails from "../Pages/SearchDetails";
import NotFound from "../Pages/PageNotFound";

export default function Customroutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:name" element={<ProductDetails />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}
