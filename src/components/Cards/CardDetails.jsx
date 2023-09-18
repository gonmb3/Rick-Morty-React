import React, { useEffect, useState } from "react";
import { useParams  } from 'react-router-dom'

const CardDetails = () => {
    const {id} = useParams();
    const [fetchedData, setFetchedData] = useState([]);
    const {name,image, location, origin, gender, species, status, type} = fetchedData;

    const api = `https://rickandmortyapi.com/api/character/${id}`
   

     //fetching data
  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
    })();
  }, [api]);
 
  return (
    <div className="container d-flex justify-content-center">
        <div className="d-flex flex-column gap-3">
            <h1 className="text-center">
                {name}
            </h1>
            <img src={image} alt={name} className="img-fluid" />
                 {/*character status*/}
          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={` badge bg-danger py-3 fs-5`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
             return (
              <div
              className={` badge bg-success py-3 fs-5`}
            >
              {status}
            </div>
             )
            } else {
              return (
                <div
                  className={` badge bg-secondary py-3 fs-5`}
                >
                  {status}
                </div>
              );
            }
          })()}

          <div className="content">
            <div className="">
                <span className="fw-bold">
                 Genero: {gender}
                </span>
            </div>
            <div className="">
                <span className="fw-bold">
                 Especie: {species}
                </span>
            </div>

            <div className="">
                <span className="fw-bold">
                 Ubicacion: {location?.name}
                </span>
            </div>
            <div className="">
                <span className="fw-bold">
                 Tipo: {type === "" ? "Desconocido" : type}
                </span>
            </div>
            <div className="">
                <span className="fw-bold">
                 Origen: {origin?.name}
                </span>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default CardDetails
