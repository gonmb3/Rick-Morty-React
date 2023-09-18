import styles from "./Search.module.scss"

const Search = ({setSearch, setPageNumber}) => {
  return (
    <form className="d-flex flex-sm-row  align-items-center flex-column justify-content-center my-4  gap-3">
      <input
      onChange={e => {
        setPageNumber(1)
        setSearch(e.target.value) 
      }}
       className={`${styles.input} p-2`}
        type="text"
         placeholder="Buscar Personajes..."/>
      <button
      onClick={e => e.preventDefault()}
       className={`${styles.btn} btn btn-primary fs-5`} >Buscar</button>
    </form>
  )
}

export default Search
