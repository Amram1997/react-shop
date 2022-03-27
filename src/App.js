import React from "react";
import { useEffect, useReducer } from "react";
import { CartModal } from "./components/Modal/CartModal";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Pages/Home";
import { Products } from "./components/Pages/Products";
import { getRequest } from "./requests/index";
import { ALL_PRODUCTS } from "./utils/index";
import { Routes, Route } from "react-router";
import SingleProduct from "./components/Pages/SingleProduct/SingleProduct";

let defaultSate = {
  products: [],
  isModalOpen: false,
  filteredState: [],
  count: 0,
};

export const ACTION_TYPES = {
  GET_REQUEST: "GET_REQUEST",
  CART_TOGGLE: "CART_TOGGLE",
  GET_ID: "GET_ID",
  CHANGE_COUNT: "CHANGE_COUNT",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_REQUEST: {
      return { ...state, products: action.res };
    }
    case ACTION_TYPES.CART_TOGGLE:
      return { ...state, isModalOpen: !state.isModalOpen };
    case ACTION_TYPES.GET_ID: {
      console.log(action.id);
      let newProducts = state.products.map((item) => {
        if (item.id === action.id) {
          return item;
        }
      });
      let filterItem = newProducts.filter((item) => {
        return item !== undefined;
      });
      console.log(newProducts);

      return { ...state, filteredState: filterItem };
    }
    case ACTION_TYPES.CHANGE_COUNT: {
      if (state.count >= 0) {
        return { ...state, count: state.count + action.x };
      } else {
        return { ...state, count: +1 };
      }
    }
  }
}

export const CartContext = React.createContext(defaultSate);

function App() {
  const [state, dispatch] = useReducer(reducer, defaultSate);
  console.log(state);
  useEffect(() => {
    getRequest(ALL_PRODUCTS).then((res) => {
      let newRes = res.map((product) => {
        return { ...product, count: 1 };
      });
      dispatch({ type: ACTION_TYPES.GET_REQUEST, res: newRes });
    });
  }, []);
  console.log(CartContext);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      <div style={{ position: "relative" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>

        <Routes>
          <Route path="/products" element={<Products />} />
        </Routes>
        <Routes>
          <Route path="/products/:productId" element={<SingleProduct />} />
        </Routes>
        {state.isModalOpen && <CartModal />}
      </div>
    </CartContext.Provider>
  );
}

export default App;
