import { makeStyles } from "@material-ui/core/styles";
export default makeStyles(() => ({
  brand: { flex: 1 },
  dot: { color: "grey" },
  hamburguer: { alignSelf: "center" },
  search: {
    width: "100%",
    marginBottom: "20px",
  },
  margin: { width: "95%" },

  cartIcon: {
    flex: 1,
    display: "flex",
  },
  iconCart: { color: "black" },
  account: { display: "flex", alignItems: "center", marginRight: "25px" },
}));
