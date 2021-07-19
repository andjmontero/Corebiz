import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Badge,
  TextField,
  InputAdornment,
  Grid,
  Drawer,
  Button,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import { UseCart } from "../../../CartContext";
import useStyles from "./styles";
const Navbar = ({ ToggleDrawer, cartAmount }) => {
  const classes = useStyles();

  return (
    <>
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
            <IconButton>
              <Badge badgeContent={cartAmount} color="primary" showZero>
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
    </>
  );
};

export default Navbar;
