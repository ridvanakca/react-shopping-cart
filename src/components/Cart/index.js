import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Link, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

function Cart() {
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link href='/' variant='h4' underline='hover'>
          Book List
        </Link>
        <Typography variant='h4' gutterBottom>
          Cart
        </Typography>
      </Box>

      <Typography variant='h6' mb={2}>
        Total Amount:{" "}
        <Typography variant='h5' sx={{ display: "inline-block" }}>
          &#8378;19.99
        </Typography>
      </Typography>

      <Card sx={{ display: "flex" }}>
        <CardMedia component='img' sx={{ width: 150, padding: 1 }} src='https://images-na.ssl-images-amazon.com/images/I/51eqjXwFzwL._SX344_BO1,204,203,200_.jpg' alt='Simyaci' />
        <Box sx={{ display: "flex", flexDirection: "column", paddingLeft: 2 }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography mb={1} component='div' variant='h4'>
              Simyaci
            </Typography>
            <Typography variant='subtitle1' color='text.secondary' component='div'>
              <span style={{ fontWeight: "bold" }}>Author:</span> Paulo Coelho
            </Typography>
            <Typography variant='subtitle1' color='text.secondary' component='div'>
              <span style={{ fontWeight: "bold" }}>Price:</span> &#8378; 19.99
            </Typography>
            <Typography variant='subtitle1' color='text.secondary' component='div'>
              <span style={{ fontWeight: "bold" }}>Total:</span> &#8378; 19.99
            </Typography>
            <Typography variant='subtitle1' color='text.secondary' component='div'>
              There is a total of 1 of this product in your cart.
            </Typography>
            <Stack direction='row' spacing={1} mt={1}>
              <IconButton color='primary' aria-label='add to shopping cart'>
                <RemoveIcon />
              </IconButton>
              <Button size='small' variant='outlined'>Remove from Cart</Button>
              <IconButton color='primary' aria-label='add to shopping cart'>
                <AddIcon />
              </IconButton>
            </Stack>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
}

export default Cart;
