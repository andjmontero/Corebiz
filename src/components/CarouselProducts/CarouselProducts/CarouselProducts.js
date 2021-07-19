import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Container, Typography } from "@material-ui/core";
import ProductCard from "../../CarouselProducts/ProductCard/ProductCard";
import useStyles from "./styles.js";
function CarouselDesktop({ products }) {
  const classes = useStyles();

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <ArrowBackIosIcon color="secondary" />,
    nextArrow: <ArrowForwardIosIcon color="secondary" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      <Container align="left" className={classes.cont}>
        <Typography variant="h6" className={classes.location} align="left">
          Más Vendidos
        </Typography>
        <div className={classes.box}></div>
      </Container>
      <Container align="center" className={classes.container}>
        <Slider {...settings}>
          {products.map((item) => (
            <ProductCard key={item.productId} item={item} />
          ))}
        </Slider>
      </Container>
    </>
  );
}

export default CarouselDesktop;
