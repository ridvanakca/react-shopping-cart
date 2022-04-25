import { Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { BooksContext } from "../../BooksContext";
import { Link } from "react-router-dom";

function Products() {
  const context = useContext(BooksContext);
  console.log(context);

  const [open, setOpen] = useState(false);

  const handleAddClick = (book) => {
    setOpen(true);
    context.addToCart(book);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <IconButton size='small' aria-label='close' color='inherit' onClick={handleClose}>
        <CloseIcon fontSize='small' />
      </IconButton>
    </>
  );

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant='h4' gutterBottom>
          Book List
        </Typography>
        <Link to='/cart' style={{ fontSize: "1.5rem" }}>
          Cart ({context.totalProductsCount()})
        </Link>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {context.bookList &&
            context.bookList.map((book) => (
              <Grid key={book.id} item xs={4} sm={8} md={4}>
                <Card sx={{ display: "flex" }}>
                  <CardMedia component='img' sx={{ width: 150, padding: 1 }} src={book.image} alt={book.name} />
                  <Box sx={{ display: "flex", flexDirection: "column", paddingLeft: 2 }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography mb={1} component='div' variant='h4'>
                        {book.name}
                      </Typography>
                      <Typography variant='subtitle1' color='text.secondary' component='div'>
                        <span style={{ fontWeight: "bold" }}>Author:</span> {book.author}
                      </Typography>
                      <Typography variant='subtitle1' color='text.secondary' component='div'>
                        <span style={{ fontWeight: "bold" }}>Price:</span> &#8378; {book.price}
                      </Typography>
                      <Button sx={{ marginTop: 2 }} variant='outlined' onClick={() => handleAddClick(book)}>
                        <AddShoppingCartIcon />
                        Add to Cart
                      </Button>
                      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} message='Book is added' action={action} />
                    </CardContent>
                  </Box>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
}

export default Products;
