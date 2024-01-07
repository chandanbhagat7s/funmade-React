import axios from "axios";
import { useContext, useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import Product from "./Product";
import { Container } from "react-bootstrap";
import setLoadingContxt from "../Context/setLoadingContxt";

function Allproducts({ url }) {
  // we will request the api for getting details
  const [productData, setProductData] = useState([]);
  const [error, setError] = useState(false);

  const { loading, setLoading } = useContext(setLoadingContxt);

  async function downlodeProduts() {
    try {
      setLoading(true);
      const products = await axios.get(url);
      console.log(products);

      setProductData([...products.data.data.product]);
      setLoading(false);
    } catch (e) {
      console.log("no product found with  ");
      setError(true);
      setLoading(false);
    }
  }
  useEffect(() => {
    downlodeProduts();
  }, []);

  return (
    <Container className="my-4">
      {!error ? (
        <Row>
          {productData.map((el) => {
            {
              return <Product key={el._id} data={el} />;
            }
          })}
        </Row>
      ) : (
        "error"
      )}
    </Container>
  );
}

export default Allproducts;
