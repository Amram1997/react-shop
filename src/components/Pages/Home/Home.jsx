import React from "react";
import home1 from "../../../assets/home1.jpg";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${home1})`,
        width: "100%",
        height: "580px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
        marginTop: "16px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "25%",
          width: "600px",
        }}
      >
        <h1 style={{ color: "GrayText", fontSize: "40px" }}>Shop Brand</h1>
        <h3 style={{ color: "GrayText", fontWeight: "bolder" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae unde
          officiis commodi, doloremque reiciendis tenetur cum nobis atque porro
          accusantium ex similique natus dolor soluta nulla magnam maiores
          tempora possimus.
        </h3>
        <button
          style={{
            background: "black",
            padding: "12px 24px",
            fontSize: "18px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          <Link
            to="/products"
            style={{ textDecoration: "none", color: "wheat" }}
          >
            Shop Now
          </Link>
        </button>
      </div>
    </div>
  );
}
