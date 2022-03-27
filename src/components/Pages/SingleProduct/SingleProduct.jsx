import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ProductItem } from "../../ProductItem/ProductItem";
function SingleProduct() {
  const [state, setState] = useState([]);
  const { productId } = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((response) => setState([response]));
  }, []);
  console.log(state);
  return (
    <div style={{ textAlign: "center" }}>
      <h2
        style={{
          letterSpacing: "10px",
          fontFamily: "sans-serif",
        }}
      >
        SingleProduct
      </h2>
      <div
        style={{
          width: "500px",
          position: "absolute",
          right: "30%",
          boxShadow: " 10px 10px 10px 10px  rgba(0,0,0,0.22)",
        }}
      >
        {state.map((item) => {
          return (
            <div>
              <img
                src={item.image}
                style={{ width: "250px", height: "350px" }}
              />
              <h4 style={{ fontFamily: "monospace" }}>{item.description}</h4>
              <h3>${item.price}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SingleProduct;
