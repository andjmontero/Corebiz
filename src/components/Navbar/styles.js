import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  brand: { flex: 1 },
  dot: { color: "grey" },
  search: {
    position: "relative",
    width: "auto",
    flex: 2,
    padding: "0px 10px 0px 10px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginBottom: "20px",
    },
  },
  margin: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      width: "93%",
    },
  },
  cartIcon: {
    flex: 1,
    display: "flex",
    paddingLeft: "20px",
    [theme.breakpoints.down("xs")]: {
      padding: "0px",
    },
  },
  iconCart: { color: "black" },
  account: { display: "flex", alignItems: "center", marginRight: "25px" },

  hamburguer: { alignSelf: "center" },
}));
