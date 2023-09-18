import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({setPageNumber, pageNumber, info}) => {
 
  const [width, setWidth] = useState(window.innerWidth);


  const udpateDimension = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
      window.addEventListener("resize", udpateDimension)
      return  window.addEventListener("remove", udpateDimension)
  }, [])


  return (
  <>
  <style jsx>
    { ` 
      @media (max-width: 767px){
          .next, .prev{
            display:none;
          }
          .pagination{
            font-size:14px;
          }
      }
    `}
  </style>
      <ReactPaginate
    className="pagination d-flex justify-content-center gap-4 my-2 "
    nextLabel="Siguiente"
    marginPagesDisplayed={width < 576 ? 1 : 2}
    pageRangeDisplayed={width < 576 ? 1 : 2}
    previousLabel="Anterior"
    nextClassName="btn btn-primary next"
    previousClassName="btn btn-primary prev"
    pageCount={info?.pages}
    pageClassName="page-item"
    pageLinkClassName="page-link"
    onPageChange={(data) => {setPageNumber(data.selected +1)} }
    activeClassName="active"
    forcePage={pageNumber === 1 ? 0 : pageNumber -1}
    
    />
    
  </>


  
  )
}

export default Pagination
