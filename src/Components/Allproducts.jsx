import axios from "axios";
import { useContext, useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import Product from "./Product";
import { Button, Container } from "react-bootstrap";
import setLoadingContxt from "../Context/setLoadingContxt";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../Redux/Slices/productslice";
import { addTocart } from "../Redux/Slices/AuthSlice";

function Allproducts({ url }) {
  // we will request the api for getting details
  // const [productData, setProductData] = useState([]);
  const dispatch = useDispatch();
  const { loggedin, data } = useSelector((state) => state.auth);

  const { loading, setLoading, setError, error } = useContext(setLoadingContxt);

  let productData = useSelector((state) => {
    return state.product.product;
  });
  async function addToCart(productName) {
    try {
      const res = await dispatch(addTocart(productName));
      console.log(res);
      if (res.payload.data.status == "success") {
        setError({
          message: "product added to cart successfully",
          type: "dark",
        });
      }
    } catch (error) {
      console.log(error);
      setError({
        message: error.response.data.msg,
        type: "danger",
      });
    }
  }
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
            return (
              <>
                {loggedin ? (
                  <>
                    <Product key={el._id} product={el}>
                      <Button
                        className="mx-4"
                        variant="warning"
                        onClick={() => addToCart(el.productName)}
                      >
                        Add to cart
                      </Button>
                    </Product>
                  </>
                ) : (
                  <>
                    <Product key={el._id} product={el} />
                  </>
                )}
              </>
            );
          }
        })}
      </Row>
    </Container>
  );
}

export default Allproducts;
