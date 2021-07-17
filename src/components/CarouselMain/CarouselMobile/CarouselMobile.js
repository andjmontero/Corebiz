import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Typography, Grid } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useStyles from "./styles";

const CarouselMobile = () => {
  const classes = useStyles();
  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showThumbs={false}
        interval={8000}
        transitionTime={1000}
        showStatus={false}
      >
        <div className={classes.img1}>
          <Typography align="left" variant="h5">
            ¡Hola! ¿Qué es lo que buscas?
          </Typography>
          <Typography align="left" variant="h4">
            Crear o migrar tu comercio electrónico?
          </Typography>
        </div>

        <div className={classes.img2}>
          <Typography align="left" variant="h5">
            ¡Hola! ¿Qué es lo que buscas?
          </Typography>
          <Typography align="left" variant="h4">
            Crear o migrar tu comercio electrónico?
          </Typography>
        </div>
        <div className={classes.img3}>
          <Typography align="left" variant="h5">
            ¡Hola! ¿Qué es lo que buscas?
          </Typography>
          <Typography align="left" variant="h4">
            Crear o migrar tu comercio electrónico?
          </Typography>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselMobile;
