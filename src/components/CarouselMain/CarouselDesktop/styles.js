import { makeStyles } from "@material-ui/core/styles";
export default makeStyles(() => ({
  slide: {
    height: "65vh",
    display: "flex",
    width: "100%",
    backgroundImage: "url(../images/img-3.jpeg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  textMain: {
    color: "white",
    display: "flex",
    alignItems: "center",
    width: "50%",
    padding: "60px",
  },
  text: { margin: "auto" },
}));
