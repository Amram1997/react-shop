import React, { useContext } from "react";
import { ACTION_TYPES, CartContext } from "../../App";

export function Counter() {
  const { state, dispatch } = useContext(CartContext);
  console.log(state);
  return (
    <div style={{ display: "flex" }}>
      <button
        style={{ backgroundColor: "black", color: "white", marginRight: "5px" }}
        onClick={() => dispatch({ type: ACTION_TYPES.CHANGE_COUNT, x: +1 })}
      >
        +
      </button>
      <span style={{ color: "white", fontWeight: "bolder" }}>
        {state.count}
      </span>
      <button
        style={{
          backgroundColor: "GrayText",
          color: "white",
          marginLeft: "5px",
        }}
        onClick={() => dispatch({ type: ACTION_TYPES.CHANGE_COUNT, x: -1 })}
      >
        -
      </button>
    </div>
  );
}
