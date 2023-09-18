import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filters = ({setPageNumber, setStatus, setGender, setSpecies}) => {

  const clearFilter = () => {
    setPageNumber("") 
    setStatus("")
     setGender("") 
     setSpecies("")

     window.location.reload(false)
  }

  return (
    <div className="col-lg-3 col-12 mb-4">
      <div className="text-center fs-4 mb-2">Filtros</div>
      <div
      onClick={clearFilter}
        style={{ cursor: "pointer" }}
        className="text-primary  text-center text-decoration-underline mb-5"
      >
        Limpiar Filtros
      </div>

      <div className="accordion" id="accordionExample">
      <Status setPageNumber={setPageNumber} setStatus={setStatus}  />
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber}/>
        
      </div>
    </div>
  );
};

export default Filters;
