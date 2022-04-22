import { Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { BooksContext } from '../../BooksContext';

function Products() {

  const context = useContext(BooksContext);

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
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
        <Link href='/cart' variant='h4' underline='hover'>
          Cart
        </Link>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {context &&
            context.bookList.map((book) => (
              <Grid item xs={4} sm={4} md={4}>
                <Card key={book.id} sx={{ display: "flex"}}>
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
                      <Button sx={{ marginTop: 2 }} variant='outlined' onClick={handleClick}>
                        <IconButton size='small' color='primary' aria-label='add to shopping cart'>
                          <AddShoppingCartIcon />
                        </IconButton>
                        Add to Cart
                      </Button>
                      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} message='Book is added' action={action} />
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
