import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

const Cards = ({ results, page}) => {
  let display;

  if (results) {
    display = results.map((result) => {
      //destructuring data
      const { id, name, image, location, status } = result;

      return (
        <Link
          style={{textDecoration: "none"}}
         to={`${page}${id}`}
          key={id}
           className="col-lg-4 col-md-6 col-sm-12 mb-4 position-relative text-dark"
           >
          <div className={`${styles.cards} d-flex justify-content-center flex-column m-2`}>
            {/* card image */}
            <img src={image} alt={name} className={`${styles.img} img-fluid`} />
            {/* card text */}
            <div className="content p-2">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="">Ultima Ubicación</div>
                <div className="fs-5">{location.name} </div>
              </div>
            </div>
          </div>
          {/*character status*/}
          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} badge bg-danger position-absolute`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
             return (
              <div
              className={`${styles.badge} badge bg-success position-absolute`}
            >
              {status}
            </div>
             )
            } else {
              return (
                <div
                  className={`${styles.badge} badge bg-secondary position-absolute`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = "Personaje No Encontrado...";
  }

  return <>{display} </>;
};

export default Cards;
