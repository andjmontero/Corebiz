import { makeStyles } from "@material-ui/core/styles";
export default makeStyles(() => ({
  brand: { flex: 1 },
  dot: { color: "grey" },

  search: {
    position: "relative",
    width: "auto",
    flex: 2,
    display: "flex",
  },
  margin: { width: "100%" },

  cartIcon: {
    flex: 1,
    display: "flex",
    paddingLeft: "40px",
  },
  iconCart: { color: "black" },
  account: { display: "flex", alignItems: "center", marginRight: "25px" },
}));
