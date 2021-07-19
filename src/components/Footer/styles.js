import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  upperFooter: {
    backgroundColor: "#f2f2f2",
    padding: "20px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "25px",
    },
  },

  novedades: {
    fontWeight: "bolder",
    [theme.breakpoints.down("xs")]: {
      textAlign: "left",
    },
  },
  input: {
    outline: "none",
    padding: "15px",
    border: "none",
    marginRight: "7px",
    borderRadius: "5px",
    marginTop: "10px",
    width: "250px",
    "&:focus": { outline: "solid 1px black" },
    [theme.breakpoints.down("xs")]: {
      width: "95%",
      height: "20px",
    },
  },

  btnSub: {
    color: "white",
    backgroundColor: "black",
    border: "none",
    outline: "none",
    padding: "15px",
    cursor: "pointer",
    width: "120px",
    "&:active": {
      backgroundColor: "grey",
      transform: "translateY(2px)",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      borderRadius: "5px",
      marginTop: "10px",
      padding: 15,
    },
  },
  lowerFooter: {
    backgroundColor: "black",
    color: "white",
    display: "flex",
    padding: "0 100px 0 100px",
    [theme.breakpoints.down("xs")]: {
      padding: "20px",
    },
  },
  address: { textAlign: "left" },
  location: { padding: "10px 0 10px 0" },
  box: {
    overflow: "visible",
    borderBottom: "solid 4px white",
    width: "12%",
    minWidth: "40px",
  },

  addressList: { listStyleType: "none", padding: "0px" },
  add: {
    [theme.breakpoints.down("xs")]: {
      paddingTop: "10px",
      fontWeight: "lighter",
    },
  },
  button: {
    fontSize: "10px",
    width: "200px",
    padding: "5px",
    margin: "8px",

    [theme.breakpoints.down("xs")]: {
      fontWeight: "bold",
      padding: "10px",
      marginBottom: 20,
      width: 230,
    },
  },
  iconBtn: { marginLeft: "-45px" },
  footerIcons: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "space-around",
      paddingTop: "10px",
    },
  },
  paper: {
    marginTop: "10px",
    borderRadius: "9px",
    backgroundColor: "grey",
    color: "white",
    padding: "15px",
  },
  developedBy: { margin: "auto 10px auto 10px" },
  p: { margin: "0px", fontSize: "10px", textAlign: "left" },
  h3: { margin: "5px" },
}));
