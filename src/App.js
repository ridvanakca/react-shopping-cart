import { Routes, Route } from "react-router";
import "./App.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Products from "./components/Products";
import Cart from "./components/Cart";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { BooksProvider } from './BooksContext';


function App() {
  return (
    <BooksProvider>
      <CssBaseline />
      <Container maxWidth='xl'>
        <Box sx={{ height: "100vh" }}>
          <Typography align='center' variant='h3' component='div' gutterBottom>
            Shopping Cart
          </Typography>
          <Routes>
            <Route path='/' element={<Products />} />
            <Route path='cart' element={<Cart />} />
          </Routes>
        </Box>
      </Container>
    </BooksProvider>
  );
}

export default App;
