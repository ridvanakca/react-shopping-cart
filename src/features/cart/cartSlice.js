import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  total: 0,
  count: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingBook = state.cart.find((cartItem) => cartItem.id === action.payload.id);
      if (existingBook) {
        const updatedCart = state.cart.map((cartItem) => (cartItem.id === action.payload.id ? { ...cartItem, count: cartItem.count + 1 } : cartItem));
        state.cart = updatedCart;
      } else {
        state.cart = [...state.cart, { ...action.payload, count: 1 }];
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((cartItem) => cartItem.id !== action.payload);
    },
    increaseProductCount: (state, action) => {
      state.cart = state.cart.map((cartItem) => (cartItem.id === action.payload ? { ...cartItem, count: cartItem.count + 1 } : cartItem));
    },
    decreaseProductCount: (state, action) => {
      state.cart = state.cart.map((cartItem) => (cartItem.id === action.payload && cartItem.count > 1 ? { ...cartItem, count: cartItem.count - 1 } : cartItem));
    },
    sumOfBooksPrice: (state) => {
      state.total = state.cart.reduce((total, current) => (total += current?.count * current?.price), 0).toFixed(2);
    },
    totalProductsCount: (state) => {
      state.count = state.cart.reduce((total, current) => (total += current.count), 0);
    },
  },
});

export const { addToCart, removeFromCart, increaseProductCount, decreaseProductCount, sumOfBooksPrice, totalProductsCount } = cartSlice.actions;

export default cartSlice.reducer;
