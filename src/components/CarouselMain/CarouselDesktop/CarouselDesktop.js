import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Typography, Grid } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useStyles from "./styles";

const CarouselMain = () => {
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
        <div className={classes.carousel}>
          <div className={classes.filler}>
            <div className={classes.textMain}>
              <Typography align="left" variant="h6">
                ¡Hola! ¿Qué es lo que buscas?
              </Typography>
              <Typography align="left" variant="h4">
                Crear o migrar tu comercio electrónico?
              </Typography>
            </div>
          </div>
          <img src="../images/img-01.jpg" className={classes.img} />
        </div>

        <div className={classes.carousel}>
          <div className={classes.filler}>
            <div className={classes.textMain}>
              <Typography align="left" variant="h6">
                ¡Hola! ¿Qué es lo que buscas?
              </Typography>
              <Typography align="left" variant="h4">
                Crear o migrar tu comercio electrónico?
              </Typography>
            </div>
          </div>
          <img src="../images/img-02.jpg" className={classes.img} />
        </div>

        <div className={classes.carousel}>
          <div className={classes.filler}>
            <div className={classes.textMain}>
              <Typography align="left" variant="h6">
                ¡Hola! ¿Qué es lo que buscas?
              </Typography>
              <Typography align="left" variant="h4">
                Crear o migrar tu comercio electrónico?
              </Typography>
            </div>
          </div>
          <img src="../images/img-03.jpg" className={classes.img} />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselMain;
