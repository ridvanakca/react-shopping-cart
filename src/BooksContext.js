import React, { createContext, useState, useEffect } from "react";
import { books } from "./data";

const BooksContext = createContext();

const BooksProvider = ({ children }) => {
  const [bookList, setBookList] = useState(() => JSON.parse(localStorage.getItem("data")) ?? []);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(books));
  }, [bookList]);

  const addToCart = (book) => {
    const existingBook = cart.find((cartItem) => cartItem.id === book.id);
    if (existingBook) {
      const updatedCart = cart.map((cartItem) => (cartItem.id === book.id ? { ...cartItem, count: cartItem.count + 1 } : cartItem));
      return setCart(updatedCart);
    } else {
      return setCart([...cart, { ...book, count: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(() => cart.filter((cartItem) => cartItem.id !== id));
  };

  const increaseProductCount = (id) => {
    setCart(() => cart.map((cartItem) => (cartItem.id === id ? { ...cartItem, count: cartItem.count + 1 } : cartItem)));
  };

  const decreaseProductCount = (id) => {
    setCart(() => cart.map((cartItem) => (cartItem.id === id && cartItem.count > 1 ? { ...cartItem, count: cartItem.count - 1 } : cartItem)));
  };

  const sumOfBooksPrice = () => {
    return cart.reduce((total, current) => (total += current?.count * current?.price), 0).toFixed(2);
  };

  const totalProductsCount = () => {
    return cart.reduce((total, current) => (total += current.count), 0);
  };

  const value = {
    bookList: bookList,
    cart: cart,
    addToCart: addToCart,
    increaseProductCount: increaseProductCount,
    decreaseProductCount: decreaseProductCount,
    removeFromCart: removeFromCart,
    sumOfBooksPrice: sumOfBooksPrice,
    totalProductsCount: totalProductsCount,
  };

  return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>;
};

export { BooksContext, BooksProvider };
