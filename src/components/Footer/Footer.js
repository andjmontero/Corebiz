import { Typography, Button, Grid, Popper } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import NearMeIcon from "@material-ui/icons/NearMe";
import { useEffect, useState } from "react";
import useStyles from "./styles";
function Footer() {
  const [popOver, setPopOver] = useState(false);
  const [anchor, setAnchor] = useState(null);
  const classes = useStyles();
  //// Screen Size Check
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const [data, setData] = useState({
    name: "",
    email: "",
  });
  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
  function validateData(e) {
    e.preventDefault();
    setAnchor(e.currentTarget);
    let validMail =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (validMail.test(data.email)) {
      setPopOver(false);
      submit();
      return true;
    } else {
      setPopOver(true);
      return false;
    }
  }

  function submit() {
    fetch("https://corebiz-test.herokuapp.com/api/v1/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: data.name, email: data.email }),
    })
      .then((res) => {
        console.log(res.data);
      })
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <div>
      <Grid container justifyContent="center" className={classes.upperFooter}>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.novedades}>
            ¡Únete a nuestras novedades y promociones!
          </Typography>
        </Grid>
        <Grid item xs={11} className={classes.subscription}>
          <form onSubmit={(e) => validateData(e)}>
            <input
              onChange={(e) => handle(e)}
              id="name"
              value={data.name}
              type="text"
              placeholder="Ingresa tu nombre"
              className={classes.input}
              required
            />
            <input
              onChange={(e) => handle(e)}
              id="email"
              value={data.email}
              placeholder="Ingresa tu mail"
              className={classes.input}
              style={{ outline: popOver && "solid 2px red" }}
            />
            <Popper open={popOver} anchorEl={anchor} placement="top">
              <div className={classes.paper}>Ingrese un E-mail Válido</div>
            </Popper>
            <button type="submit" className={classes.btnSub}>
              Suscrbirme
            </button>
          </form>
        </Grid>
      </Grid>
      <Grid container className={classes.lowerFooter}>
        <Grid item xs={12} sm={3} align="left">
          <div className={classes.box}>
            <Typography variant="h6" className={classes.location}>
              Ubicación
            </Typography>
          </div>
          <div>
            <ul className={classes.addressList}>
              <li className={classes.add}>
                Avenida Andrômeda, 2000. Bloco 6 e 8
              </li>
              <li className={classes.add}>Alphavile SP</li>
              <li className={classes.add}>brasil@corebiz.ag</li>
              <li className={classes.add}>+55 11 30901939</li>
            </ul>
          </div>
        </Grid>
        <Grid
          justifyContent="center"
          alignItems="center"
          direction="column"
          container
          xs={12}
          sm={6}
        >
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<EmailIcon className={classes.iconBtn} />}
          >
            Contactanos
          </Button>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<HeadsetMicIcon />}
          >
            Habla con un consultor
          </Button>
        </Grid>
        <Grid item xs={12} sm={3} className={classes.footerIcons}>
          <div className={classes.developedBy}>
            <p className={classes.p}>Desarrollado por</p>
            <Typography variant="h5" style={{ fontWeight: 600 }}>
              corebiz.
            </Typography>
          </div>
          <div className={classes.developedBy}>
            <p className={classes.p}>Powered by</p>
            <Typography variant="caption" style={{ fontWeight: 600 }}>
              <NearMeIcon fontSize="small" />
              VTEX
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
