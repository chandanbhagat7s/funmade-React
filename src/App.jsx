import { useEffect, useState } from "react";
import Customroutes from "./Components/Customroutes";
import "bootstrap/dist/css/bootstrap.min.css";
import setLoadingContxt from "./Context/setLoadingContxt";

function App() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  return (
    <>
      <setLoadingContxt.Provider
        value={{
          loading,
          setLoading,
          search,
          setSearch,
          error,
          setError,
        }}
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
