import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Badge,
  IconButton,
  TextField,
  InputAdornment,
  Grid,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import useStyles from "./styles";
import MenuIcon from "@material-ui/icons/Menu";
import { UseCart } from "../../CartContext";
const Navbar = ({ ToggleDrawer, ToggleCart }) => {
  const classes = useStyles();
  const { cart } = UseCart();
  const [cartAmount, setCartAmount] = useState();
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("productsOnCart"));
    setCartAmount(cartItems);
  }, [cart]);

  console.log(cart);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  return (
    <>
      {width > 720 ? (
        <AppBar position="sticky" className={classes.appBar} color="inherit">
          <Toolbar>
            <div className={classes.brand}>
              <Typography variant="h3">
                corebiz<span className={classes.dot}>.</span>
              </Typography>
            </div>
            <div className={classes.search}>
              <TextField
                placeholder="¿Qué estás buscando?"
                className={classes.margin}
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className={classes.cartIcon}>
              <div className={classes.account}>
                <IconButton>
                  <PersonOutlineIcon />
                  <Typography variant="subtitle1">Mi Cuenta</Typography>
                </IconButton>
              </div>
              <IconButton>
                <Badge
                  badgeContent={cart.length ? cart.length : 0}
                  color="primary"
                  showZero
                  onClick={() => ToggleCart("open")}
                >
                  <ShoppingCartIcon color="secondary" />
                </Badge>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar position="sticky" className={classes.appBar} color="inherit">
          <Grid container align="center">
            <Grid item xs={2} className={classes.hamburguer}>
              <IconButton onClick={() => ToggleDrawer("open")}>
                <MenuIcon fontSize="large" />
              </IconButton>
            </Grid>

            <Grid item xs={8} className={classes.brand}>
              <Typography variant="h3">
                corebiz<span className={classes.dot}>.</span>
              </Typography>
            </Grid>

            <Grid item xs={2} className={classes.cartIcon}>
              <IconButton onClick={() => ToggleCart(true)}>
                <Badge
                  badgeContent={cartAmount == undefined ? 0 : cartAmount.length}
                  color="primary"
                  showZero
                >
                  <ShoppingCartIcon color="secondary" fontSize="large" />
                </Badge>
              </IconButton>
            </Grid>
          </Grid>
          <Grid item xs={12} align="center" className={classes.search}>
            <TextField
              placeholder="¿Qué estás buscando?"
              className={classes.margin}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <SearchIcon fontSize="large" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </AppBar>
      )}
    </>
  );
};

export default Navbar;
