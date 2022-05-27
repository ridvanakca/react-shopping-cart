import { useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Products from "./components/Products";
import Cart from "./components/Cart";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { sumOfBooksPrice, totalProductsCount } from "./features/cart/cartSlice";
import { books } from "./data";

function App() {
  const [bookList, setBookList] = useState(books);
  const { cart } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sumOfBooksPrice());
    dispatch(totalProductsCount());
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <CssBaseline />
      <Container maxWidth='xl'>
        <Box sx={{ height: "100vh" }}>
          <Typography align='center' variant='h3' component='div' gutterBottom>
            Shopping Cart
          </Typography>
          <Routes>
            <Route path='/' element={<Products bookList={bookList} />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Box>
      </Container>
    </>
  );
}

export default App;
