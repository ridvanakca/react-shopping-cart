import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decreaseProductCount, increaseProductCount, removeFromCart } from "../../features/cart/cartSlice";

function Cart() {

  const { cart, total, count } = useSelector((store) => store.cart);
  const dispatch = useDispatch();


  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link style={{ fontSize: "1.5rem" }} to='/'>
          Book List
        </Link>
        <Typography variant='h4' gutterBottom>
          Cart ({count})
        </Typography>
      </Box>

      <Typography variant='h6' mb={2}>
        Total Amount: &#8378;{total}
      </Typography>

      {cart &&
        cart.map((cartItem) => (
          <Card key={cartItem.id} sx={{ display: "flex" }}>
            <CardMedia component='img' sx={{ width: 150, padding: 1 }} src={cartItem.image} alt={cartItem.name} />
            <Box sx={{ display: "flex", flexDirection: "column", paddingLeft: 2 }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography mb={1} component='div' variant='h4'>
                  {cartItem.name}
                </Typography>
                <Typography variant='subtitle1' color='text.secondary' component='div'>
                  <span style={{ fontWeight: "bold" }}>Author:</span> {cartItem.author}
                </Typography>
                <Typography variant='subtitle1' color='text.secondary' component='div'>
                  <span style={{ fontWeight: "bold" }}>Price:</span> &#8378; {cartItem.price}
                </Typography>
                <Typography variant='subtitle1' color='text.secondary' component='div'>
                  <span style={{ fontWeight: "bold" }}>Total:</span> &#8378; {(cartItem.count * cartItem.price).toFixed(2)}
                </Typography>
                <Typography variant='subtitle1' color='text.secondary' component='div'>
                  There is a total of {cartItem.count} of this product in your cart.
                </Typography>
                <Stack direction='row' spacing={1} mt={1}>
                  <IconButton onClick={() => dispatch(decreaseProductCount(cartItem.id))} color='primary' aria-label='add to shopping cart' disabled={cartItem.count === 1}>
                    <RemoveIcon />
                  </IconButton>
                  <Button onClick={() => dispatch(removeFromCart(cartItem.id))} size='small' variant='outlined' disabled={cartItem.count !== 1}>
                    Remove from Cart
                  </Button>
                  <IconButton onClick={() => dispatch(increaseProductCount(cartItem.id))} color='primary' aria-label='add to shopping cart'>
                    <AddIcon />
                  </IconButton>
                </Stack>
              </CardContent>
            </Box>
          </Card>
        ))}
    </div>
  );
}

export default Cart;
