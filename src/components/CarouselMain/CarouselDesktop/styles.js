import { makeStyles } from "@material-ui/core/styles";
export default makeStyles(() => ({
  carousel: { height: "40vh", display: "flex", backgroundColor: "black" },
  img: {
    maxWidth: "55%",
    height: "auto",
    borderBottomLeftRadius: "125px",
    borderTopLeftRadius: "125px",
  },
  filler: {
    width: "45%",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textMain: { maxWidth: "350px " },
}));
