import { useState , useEffect} from "react"
import Cards from "../components/Cards/Cards"
import InputGroup from "../components/Filters/InputGroup"


const Episodes = () => {

  const [id, setId] = useState(1)
  const [info, setInfo] = useState([])
  const [results, setResults] = useState([])

  const {name, air_date} = info;

  console.log(info);

     const api = `https://rickandmortyapi.com/api/episode/${id}`

     useEffect(() => {
      (async function() {
        const data = await fetch(api).then(res => res.json())
        setInfo(data);
        
        const x = await Promise.all(
          data.characters.map((item) => {
            return fetch(item).then(res => res.json())
          })
        )
        setResults(x)
      })()
     },[api])

    

  return (
    <div className="container">
      
          <div className="row mb-4">
            <h1 className="text-center my-2">
               {/* episode name */}
              Episodio <span className="text-primary">{name === "" ? "Desconocido" : name}</span> 
            </h1>
             {/* episode air date */}
            <h5 className="text-center">Fecha de estreno {air_date === "" ? "Desconocido" : air_date} </h5>
          </div>

          <div className="row">
            <div className="col-lg-3 col-12">
              <h4 className="text-center mb-4">
              Elige Episodios
              </h4>

              {/* input component */}
              {/* 51 total episode */}
              <InputGroup setId={setId} name={"Episodio"} total={51} />
            
            </div>
            <div className="col-lg-8 col-12">
             <div className="row">
               {/* card component */}
             <Cards page="/episodios/" results={results}/>
             </div>
            </div>
          </div>

      
    </div>
  )
}

export default Episodes
