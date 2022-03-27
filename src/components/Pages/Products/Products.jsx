import React, { useContext } from "react";
import { ProductItem } from "../../ProductItem/ProductItem";
import { CartContext } from "../../../App";
export function Products() {
  const { state, dispatch } = useContext(CartContext);
  console.log(state);
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "36px" }}>Products</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        {state.products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              title={product.title}
              imageUrl={product.image}
              id={product.id}
              price={product.price}
              count={product.count}
            />
          );
        })}
      </div>
    </div>
  );
}
