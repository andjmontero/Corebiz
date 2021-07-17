import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  cont: { width: "80%" },
  container: {
    margin: "auto",
    width: "80%",
  },
  location: { padding: "10px 0 10px 0", fontWeight: "bolder" },
  box: {
    alignSelf: "left",
    overflow: "visible",
    borderBottom: "solid 4px grey",
    width: "4%",
    maxHeight: "80px",
  },
}));
