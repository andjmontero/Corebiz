import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import useStyles from "./styles.js";
import { Box, Button, IconButton, FormControl } from "@material-ui/core";
import { UseCart } from "../../CartContext";
import CloseIcon from "@material-ui/icons/Close";
import "firebase/firestore";
import { getFireStore } from "../../firebase";
import Modal from "@material-ui/core/Modal";

export default function Checkout() {
  const classes = useStyles();
  const { cart } = UseCart();
  let total = cart.reduce((t, i) => t + i.price * i.amount, 0);

  //Popper
  const [modal, setModal] = useState();
  function toggleModal(open) {
    setModal(open);
  }
  ///Buy Order

  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    tel: "",
    zip: "",
    country: "",
    province: "",
  });
  const db = getFireStore();
  const pedidosColection = db.collection("compra");
  function handle(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const clientInfo = {
    name: data.name,
    lastname: data.lastName,
    address: data.address,
    tel: data.tel,
    city: data.city,
    province: data.province,
    country: data.country,
  };
  const pedido = {
    client: { clientInfo },
    items: { cart },
    total: { total },
  };
  function sendOrder() {
    pedidosColection
      .add(pedido)
      .then(({ id }) => {})
      .catch((e) => {
        console.log(e);
      })
      .finally(toggleModal(true));
  }
  return (
    <>
      <Box align="center">
        <Typography variant="h2">Corebiz</Typography>
        <div className={classes.close}>
          <Link to="/">
            <IconButton className={classes.close}>
              <CloseIcon />
            </IconButton>
          </Link>
        </div>
        <Typography variant="h4" textAlign="center">
          Detalles de la compra
        </Typography>
        <Box align="center">
          {cart.map((item) => (
            <Grid align="center" className={classes.item}>
              <Grid item xs={2}>
                <img src={item.imageUrl} className={classes.img} />
              </Grid>
              <Grid item xs={4} className={classes.amount}>
                <Typography variant="h6">{item.productName}</Typography>
              </Grid>

              <Grid item xs={3} className={classes.amount}>
                <Typography variant="h5"> {item.amount}</Typography>
              </Grid>
              <Grid item xs={2} className={classes.amount}>
                <Typography variant="h5">
                  ${item.price * item.amount}
                </Typography>
              </Grid>
            </Grid>
          ))}
          <Typography variant="h5">Total:${total} </Typography>
        </Box>

        <FormControl className={classes.form}>
          <Typography variant="h4">Ingrese sus datos </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                defaultValue=""
                type="text"
                required
                id="nombre"
                name="name"
                label="Nombre"
                fullWidth
                onChange={(e) => handle(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={(e) => handle(e)}
                required
                id="apellido"
                name="lastName"
                label="Apellido"
                fullWidth
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => handle(e)}
                required
                id="direccion"
                name="address"
                label="Direccion"
                fullWidth
                autoComplete="shipping address-line1"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={(e) => handle(e)}
                required
                id="tel"
                name="tel"
                label="Telefono"
                fullWidth
                autoComplete="telefono"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                onChange={(e) => handle(e)}
                required
                id="ciudad"
                name="city"
                label="Ciudad"
                fullWidth
                autoComplete="shipping address-level2"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={(e) => handle(e)}
                id="provincia"
                name="province"
                label="Provincia"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={(e) => handle(e)}
                required
                id="zip"
                name="zip"
                label="Codigo Postal"
                fullWidth
                autoComplete="shipping postal-code"
                value={data.zip}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={(e) => handle(e)}
                required
                id="country"
                name="country"
                label="Pais"
                fullWidth
                autoComplete="shipping country"
              />
            </Grid>
            <Grid item xs={12}>
              <Link style={{ textDecoration: "none" }}>
                <Button
                  className={classes.checkout}
                  onClick={() => sendOrder()}
                >
                  Confirmar Compra
                </Button>
              </Link>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button className={classes.cancelar}>Cancelar</Button>
              </Link>
            </Grid>
          </Grid>
        </FormControl>
        <Modal
          open={modal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <Box className={classes.modal}>
            <div className={classes.modalIn}>
              <Typography variant="h4">
                Muchas gracias por elegirnos, su compra ha sido exitosa.
              </Typography>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button
                  className={classes.btnModal}
                  onClick={() => toggleModal(false)}
                >
                  Aceptar
                </Button>
              </Link>
            </div>
          </Box>
        </Modal>
      </Box>
    </>
  );
}
