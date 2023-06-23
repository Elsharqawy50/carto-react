import { configureStore } from "@reduxjs/toolkit";
import CartItemsReducer from "./CartItemsSlice";
import ProductsReducer from "./ProductsSlice";

const store = configureStore({
  reducer: {
    products: ProductsReducer,
    cartItems: CartItemsReducer,
  },
});

export default store;
