import React, { useContext, useRef } from "react";
import { CartContext } from "../../App";
import { ACTION_TYPES } from "../../App";
import { CartModal } from "../Modal";
import { Link } from "react-router-dom";

export function ProductItem({ id, title, price, count, imageUrl }) {
  const { state, dispatch } = useContext(CartContext);
  const ref = useRef(null);
  console.log(imageUrl);

  return (
    <div
      style={{
        width: "280px",
        boxShadow: " 10px 10px 10px 10px  rgba(0,0,0,0.22)",
        textAlign: "center",
        height: "400px",
        borderRadius: "20px",
      }}
    >
      <img
        src={imageUrl}
        style={{ width: "200px", height: "260px", paddingTop: "12px" }}
      />
      <p ref={ref}>{title.substring(0, 24)}...</p>
      <p>${price}</p>
      <button
        style={{
          padding: "5px 15px",
          marginRight: "20px",
          backgroundColor: "Black",
          border: "none",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => {
          console.log(id);
          dispatch({ type: ACTION_TYPES.CART_TOGGLE });
          dispatch({ type: ACTION_TYPES.GET_ID, id: id });
        }}
      >
        Add To Cart
      </button>
      <Link
        to={`/products/${id}`}
        style={{
          padding: "5px 15px",
          backgroundColor: "GrayText",
          border: "none",
          color: "white",
          borderRadius: "5px",
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        Details
      </Link>
    </div>
  );
}
