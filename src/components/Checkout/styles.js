import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  form: {
    width: "600px",
    marginTop: "50px",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  mainCheckout: { display: "flex", justifyItems: "center" },
  cartEmpty: { textAlign: "center", width: 500 },
  cart: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  header: { textAlign: "center" },
  item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "800px",
    backgroundColor: "#c7c2c2",
    borderRadius: "5px",
    margin: "8px",
    padding: "5px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100px",
    },
  },
  img: {
    height: "100px",
    borderRadius: "50%",
    [theme.breakpoints.down("sm")]: {
      height: "80px",
    },
  },
  amount: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btnAmount: {
    padding: "2px",
    margin: "5px",
    [theme.breakpoints.down("sm")]: {
      margin: "2px",
    },
  },
  check: {
    textAlign: "center",
  },
  checkout: { backgroundColor: "#f8475f", border: "solid 1px black" },
  close: { textAlign: "right", marginRight: "200px" },
  cancelar: {
    backgroundColor: "grey",
    padding: "5px",
    margin: "20px",
    border: "solid 1px black",
  },
  modal: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalIn: {
    backgroundColor: "white",
    padding: "50px",
    textAlign: "center",
  },
  btnModal: {
    backgroundColor: "#f8475f",
    color: "white",
    padding: "10px",
    margin: "20px",
    "&:hover": {
      color: "black",
      backgroundColor: "#f8475f",
    },
  },
}));
