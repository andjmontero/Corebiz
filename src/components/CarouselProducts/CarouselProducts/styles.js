import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  cont: {
    width: "90%",
    [theme.breakpoints.down("xs")]: {
      width: "85%",
    },
  },
  container: {
    margin: "auto",
    width: "90%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginTop: "10px",
    },
  },
  location: { padding: "10px 0 10px 0", fontWeight: "bolder" },
  box: {
    alignSelf: "left",
    overflow: "visible",
    borderBottom: "solid 4px grey",
    width: "4%",
    maxHeight: "80px",
    [theme.breakpoints.down("xs")]: {
      width: "15%",
    },
  },
}));
