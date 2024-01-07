import { useEffect, useState } from "react";
import Allproducts from "./Components/Allproducts";
import Customroutes from "./Components/Customroutes";
import Navigation from "./Components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import setLoadingContxt from "./Context/setLoadingContxt";
import BasicExampleS from "./Components/BasicExampleS";

function App() {
  const [search, setSearch] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {}, [search]);

  return (
    <>
      <setLoadingContxt.Provider value={{ loading, setLoading }}>
        <Navigation setSearch={setSearch} />
        {loading && <BasicExampleS key={loading} />}
        {search && (
          <Allproducts
            key={search}
            url={`http://127.0.0.1:3000/api/v1/product/getByType/${search}`}
          />
        )}
        <Customroutes search={search} />
      </setLoadingContxt.Provider>
    </>
  );
}

export default App;
