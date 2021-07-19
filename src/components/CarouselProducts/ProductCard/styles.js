import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: 200,
    height: 350,
    paddingBottom: 0,
    boxShadow: "none",
    [theme.breakpoints.down("xs")]: {
      width: 150,
      height: 290,
    },
  },
  media: {
    height: 170,
    [theme.breakpoints.down("xs")]: {
      height: 120,
    },
  },
  content: {
    height: "140px",
    padding: "5px 0 0px 0",
    "&:hover": {
      backgroundColor: "#e6e8ea",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0px",
    },
  },
  name: { fontWeight: "600" },
  stars: { color: "#f8475f !important", fontSize: "15px !important" },
  filler1: { height: "19px" },
  filler2: {
    height: "14px",
    [theme.breakpoints.down("xs")]: {
      height: "23px",
    },
  },

  price: { color: "black", fontWeight: "700" },
  priceList: { textDecoration: "line-through", display: "block" },
  btn: {
    letterSpacing: "2px",
    width: "60%",
    margin: "auto",
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      backgroundColor: "#44484f",
    },
    bottom: "0px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}));
