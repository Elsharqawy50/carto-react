import { createSlice } from "@reduxjs/toolkit";
import data from "../db.json";

const initialState = {
  items: data,
};

const ProductsSlice = createSlice({
  name: "productItems",
  initialState,
  reducers: {
    reset(state) {
      state.items = initialState.items;
    },
    sort(state, action) {
      const { payload } = action;
      const sortedItems = [...state.items];

      if (payload === "increase") {
        sortedItems.sort((a, b) => a.product_price - b.product_price);
      } else if (payload === "decrease") {
        sortedItems.sort((a, b) => b.product_price - a.product_price);
      }

      state.items = sortedItems;
    },
    search(state, action) {
      const { payload } = action;
      state.items = initialState.items.filter(
        (ele) =>
          ele.product_name.toLowerCase().includes(payload.toLowerCase()) ||
          ele.category.toLowerCase().includes(payload.toLowerCase())
      );
    },
  },
});

export const ProductsActions = ProductsSlice.actions;

export default ProductsSlice.reducer;
