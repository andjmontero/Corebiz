import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Typography } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useStyles from "./styles";

const images = [
  "url(../images/img-3.jpeg)",
  "url(../images/img-2.jpeg)",
  "url(../images/imagen.jpeg)",
];
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
        {images.map((img) => (
          <div className={classes.slide} style={{ backgroundImage: img }}>
            <div className={classes.textMain}>
              <div clasName={classes.text}>
                <Typography align="left" variant="h5">
                  ¡Hola! ¿Qué es lo que buscas?
                </Typography>
                <Typography align="left" variant="h3">
                  Crear o migrar tu comercio electrónico?
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselMain;
