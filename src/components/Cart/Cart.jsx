import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import useStyles from "./styles.js";
import { UseCart } from "../../CartContext";
import { Button, Typography, Grid, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import { Link } from "react-router-dom";
function Cart({ ToggleCart }) {
  const classes = useStyles();

  const { cart, removeItem, addAmount, substractAmount } = UseCart();
  let total = cart.reduce((t, i) => t + i.price * i.amount, 0);

  return (
    <>
      {cart == 0 ? (
        <div className={classes.cartEmpty}>
          <IconButton className={classes.close}>
            <CloseIcon onClick={() => ToggleCart(false)} />
          </IconButton>
          <Typography variant="h4"> Tu carrito esta vacío</Typography>
          <IconButton onClick={() => ToggleCart(false)}>
            <Typography variant="h5"> Añade productos</Typography>
          </IconButton>
        </div>
      ) : (
        <div className={classes.cart}>
          <IconButton className={classes.close}>
            <CloseIcon onClick={() => ToggleCart(false)} />
          </IconButton>
          <div className={classes.header}>
            <Typography variant="h4">Tu Carrito</Typography>
          </div>
          {cart.map((item) => (
            <Grid container align="center" className={classes.item}>
              <Grid item xs={2}>
                <img src={item.imageUrl} className={classes.img} />
              </Grid>
              <Grid item xs={4} className={classes.amount}>
                <Typography variant="h6">{item.productName}</Typography>
              </Grid>

              <Grid item xs={3} className={classes.amount}>
                <IconButton>
                  <RemoveIcon
                    className={classes.btnAmount}
                    onClick={() => substractAmount(item)}
                  ></RemoveIcon>
                </IconButton>
                <Typography variant="h5"> {item.amount}</Typography>
                <IconButton>
                  <AddIcon
                    className={classes.btnAmount}
                    onClick={() => addAmount(item)}
                  ></AddIcon>
                </IconButton>
              </Grid>
              <Grid item xs={2} className={classes.amount}>
                <Typography variant="h5">
                  ${item.price * item.amount}
                </Typography>
              </Grid>
              <Grid item xs={1} className={classes.amount}>
                <IconButton
                  className={classes.close}
                  onClick={() => removeItem(item)}
                >
                  <CloseIcon />
                </IconButton>
              </Grid>
            </Grid>
          ))}
          <div className={classes.check}>
            <Typography variant="h4">Total:${total}</Typography>
            <Link to="/checkout" style={{ textDecoration: "none" }}>
              <Button
                className={classes.checkout}
                onClick={() => ToggleCart(false)}
              >
                Comprar
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
