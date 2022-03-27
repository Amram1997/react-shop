import React, { useContext, useEffect, useRef } from "react";
import { CartContext } from "../../App";
import useClicHandleModal from "../../function/clicHandleModal";
import { ACTION_TYPES } from "../../App";
import { ProductItem } from "../ProductItem/ProductItem";
import { Counter } from "../Counter";

export function CartModal({ id }) {
  const { state, dispatch } = useContext(CartContext);
  const ref = useRef(null);
  console.log(state);

  useClicHandleModal(ref, () => dispatch({ type: ACTION_TYPES.CART_TOGGLE }));

  return (
    <div>
      <div
        style={{
          backgroundColor: "#6d6d6d96",
          width: "400px",
          height: "500px",
          position: "absolute",
          right: "0",
          top: "0",
        }}
        ref={ref}
      >
        <div>
          <h1>Modal Open</h1>
          {state.filteredState.map(
            ({ title, image, price, id, count }, index) => {
              return (
                <div
                  key={index}
                  style={{
                    width: "200px",
                    height: "300px",
                    margin: "auto",
                    backgroundColor: "rgb(9 9 9 / 58%);",
                    boxShadow: " rgb(255 255 255 / 77%) 5px 5px 55px 5px",
                  }}
                >
                  <img
                    src={image}
                    alt={title}
                    style={{ width: "180px", height: "180px" }}
                  />
                  <p style={{ color: "white", fontWeight: "bolder" }}>
                    {title.substring(0, 21)}
                  </p>
                  <p style={{ color: "white", fontWeight: "bolder" }}>
                    ${price * state.count}
                  </p>
                  <Counter count={count} />
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
