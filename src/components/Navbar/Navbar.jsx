import React, { useContext } from "react";
import { CartContext } from "../../App";
import basket from "../../assets/cart.svg";
import { Link } from "react-router-dom";
export function Navbar() {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div
      style={{
        width: "100%",
        height: "58px",
        boxShadow: " 0 10px 10px rgba(0,0,0,0.22)",
      }}
    >
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          justifyContent: "space-around",
          alignItems: "center",
          fontSize: "24px",
        }}
      >
        <li style={{ fontSize: "30px" }}>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Shop
          </Link>
        </li>
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            style={{ textDecoration: "none", color: "black" }}
          >
            Products
          </Link>
        </li>
        <li>
          <a href="#" style={{ textDecoration: "none", color: "black" }}>
            <img src={basket} width="24px" /> <span>{state.count}</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
