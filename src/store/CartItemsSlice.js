import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const CartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addItem(state, { payload }) {
      const findItem = state.items.find((item) => item.id === payload.id);

      if (findItem) {
        const updatedItem = { ...findItem, amount: findItem.amount + 1 };
        const newItems = state.items.map((item) => {
          if (item.id === payload.id) {
            return updatedItem;
          }
          return item;
        });
        state.items = newItems;
      } else {
        state.items = [...state.items, payload];
      }
    },
    deleteItem(state, { payload }) {
      const findItem = state.items.find((item) => item.id === payload);

      if (findItem.amount === 1) {
        state.items = state.items.filter((item) => item.id !== payload);
      } else {
        const updatedItem = { ...findItem, amount: findItem.amount - 1 };
        const newItems = state.items.map((item) => {
          if (item.id === payload) {
            return updatedItem;
          }
          return item;
        });
        state.items = newItems;
      }
    },
  },
});

export const CartItemsActions = CartItemsSlice.actions;

export default CartItemsSlice.reducer;
