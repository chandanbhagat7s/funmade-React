import React from "react";
import MainOut from "../layout/MainOut";
import Allproducts from "../Components/Allproducts";

export default function Home() {
  return (
    <>
      <MainOut>
        <Allproducts url="http://127.0.0.1:3000/api/v1/product" />
      </MainOut>
    </>
  );
}
