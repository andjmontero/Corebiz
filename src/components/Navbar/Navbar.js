import React from "react";
import {
  AppBar,
  Toolbar,
  MenuItem,
  Menu,
  Typography,
  InputBase,
  Badge,
  IconButton,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import useStyles from "./styles";
const Navbar = () => {
  const classes = useStyles();
  return (
    <>
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
              <PersonOutlineIcon />
              <Typography variant="p">Mi Cuenta</Typography>
            </div>
            <IconButton>
              {" "}
              <Badge badgeContent={4} color="primary">
                <ShoppingCartIcon color="secondary" />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
