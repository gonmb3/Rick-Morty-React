import React, { useEffect, useState } from "react";

import Filters from "../components/Filters/Filters";
import Cards from "../components/Cards/Cards";
import Pagination from "../components/Pagination/Pagination";
import Search from "../components/Search/Search";


const Home = () => {
  //pagination state
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");

  const { info, results } = fetchedData;

  let url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  //fetching data
  useEffect(() => {
    (async function () {
      const data = await fetch(url).then((res) => res.json());
      setFetchedData(data);
    })();
  }, [url]);

  return (
    <div className="App">

        <h1 className="text-center">Personajes</h1>      

      {/* Search component*/}
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />

      <div className="container d-flex justify-content-center">
        <div className="row">
          {/* filters*/}

          <Filters
          setSpecies={setSpecies}
          setGender={setGender}
           setStatus={setStatus} 
           setPageNumber={setPageNumber} />

          {/* cards*/}
          <div className="d-flex flex-wrap col-lg-8 col-12">
            <Cards page={"/"} results={results} />
          </div>
        </div>
      </div>
      {/* Pagination component*/}
      <Pagination
        info={info}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
      />
    </div>
  );
};

export default Home;
