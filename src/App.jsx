import { useEffect, useState } from "react";
import Customroutes from "./Components/Customroutes";
import "bootstrap/dist/css/bootstrap.min.css";
import setLoadingContxt from "./Context/setLoadingContxt";

function App() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  return (
    <>
      <setLoadingContxt.Provider
        value={{ loading, setLoading, search, setSearch }}
      >
        <Customroutes />
      </setLoadingContxt.Provider>
    </>
  );
}

export default App;

// <Main>
//
// {loading && <BasicExampleS key={loading} />}

// </Main>
