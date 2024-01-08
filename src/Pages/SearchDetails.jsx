import { useContext } from "react";
import Allproducts from "../Components/Allproducts";
import setLoadingContxt from "../Context/setLoadingContxt";

export default function SearchDetails() {
  const { search } = useContext(setLoadingContxt);
  return (
    <>
      <Allproducts
        key={search}
        url={`http://127.0.0.1:3000/api/v1/product/getByType/${search}`}
      />
    </>
  );
}
