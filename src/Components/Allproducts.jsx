import axios from "axios";
import { useContext, useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import Product from "./Product";
import { Container } from "react-bootstrap";
import setLoadingContxt from "../Context/setLoadingContxt";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../Redux/Slices/productslice";

function Allproducts({ url }) {
  // we will request the api for getting details
  // const [productData, setProductData] = useState([]);
  const dispatch = useDispatch();

  const { loading, setLoading, setError, error } = useContext(setLoadingContxt);

  let productData = useSelector((state) => {
    return state.product.product;
  });

  async function downlodeProduts() {
    await dispatch(getAllProduct());
  }
  useEffect(() => {
    downlodeProduts();
  }, []);

  return (
    <Container className="my-4">
      <Row>
        {productData?.map((el) => {
          {
            return <Product key={el._id} data={el} />;
          }
        })}
      </Row>
    </Container>
  );
}

export default Allproducts;
