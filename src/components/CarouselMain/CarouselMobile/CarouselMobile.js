import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Typography, Grid } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useStyles from "./styles";

const CarouselMobile = () => {
  const classes = useStyles();
  const images = [
    "url(../images/img-4.jpg)",
    "url(../images/img-5.jpg)",
    "url(../images/img-6.jpg)",
  ];
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
            <Typography align="left" variant="h5">
              ¡Hola! ¿Qué es lo que buscas?
            </Typography>
            <Typography align="left" variant="h4">
              Crear o migrar tu comercio electrónico?
            </Typography>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselMobile;
