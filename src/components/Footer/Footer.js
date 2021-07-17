import { Typography, Button, Grid } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import NearMeIcon from "@material-ui/icons/NearMe";
import { useEffect, useState } from "react";
import useStyles from "./styles";
function Footer() {
  const classes = useStyles();
  //// Screen Size Check
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <div>
      <Grid container justifyContent="center" className={classes.upperFooter}>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.novedades}>
            ¡Únete a nuestras novedades y promociones!
          </Typography>
        </Grid>
        <Grid item xs={11} className={classes.subscription}>
          <form action="">
            <input
              type="text"
              placeholder="Ingresa tu nombre"
              className={classes.input}
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="Ingresa tu mail"
              className={classes.input}
            />
            <button className={classes.btnSub}>Suscrbirme</button>
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
