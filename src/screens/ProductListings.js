import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import CutomCard from "../components/cards/CustomCard";
import "./ProductListings.css";
import { request } from "../utils/request";

const ProductListings = ({}) => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoad(true);
    request({})
      .then((response) => {
        setData(response);
        setLoad(false);
      })
      .catch((error) => {
        console.log("Error : ", error);
        setError(true);
        setLoad(false);
      });
  }, []);

  return (
    <div className="mainProductContainer">
      <div className="display">
        <p>
          <span className="found">Found:</span> <i>{data?.length} Products</i>
        </p>
        <p>
          <span className="found">Sort By:</span>{" "}
          <i style={{ marginRight: 10, fontWeight: "bold" }}>Popularity</i>
          <FontAwesomeIcon icon={faAngleDown} />
        </p>
      </div>
      <div className="cardsContainer">
        {load && data.length === 0 && !error && <b>No Products Found</b>}
        {!load && data.length === 0 && error && (
          <p style={{ color: "red", fontWeight: "bold" }}>
            Unable to fetch products. Please try again Later
          </p>
        )}
        {data?.map((product) => (
          <div className="cardContainer">
            <CutomCard
              image={product?.images[0]}
              price={product?.price}
              title={product?.title}
              rating={product?.rating}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListings;
