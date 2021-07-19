import React, { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles.js";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { UseCart } from "../../../CartContext";
const ProductCard = ({ item }) => {
  const classes = useStyles();
  const { AddToCart } = UseCart();

  ////Display Comprar Button on mouseHover

  const [inHover, setHover] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  ///This piece of code fixes the issue with price being without decimals and some items not having priceList numbers

  const [priceList, setPriceList] = useState();
  const [price, setPrice] = useState();
  const [priceCuota, setPriceCuota] = useState();
  const addDecimals = (price) => {
    if (price != null) {
      price = String(price)
        .split("")
        .map((num) => {
          return Number(num);
        });
      if (price.length === 5) {
        price.splice(3, 0, ".");
      } else {
        price.splice(2, 0, ".");
      }
      price.join("");
      return price;
    }
  };

  useEffect(() => {
    setPriceList(addDecimals(item.listPrice));
    setPrice(addDecimals(item.price));
    setPriceCuota(addDecimals(item.installments.map((item) => item.value)));
  }, []);

  return (
    <Card
      className={classes.root}
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
      key={item.productId}
    >
      <CardMedia className={classes.media} image={item.imageUrl} />
      <CardContent text="center" className={classes.content}>
        <Typography
          gutterBottom
          variant="body2"
          color="textSecondary"
          className={classes.name}
        >
          {item.productName}
        </Typography>
        <Rating
          className={classes.stars}
          readOnly
          value={item.stars}
          emptyIcon={<StarBorderIcon fontSize="inherit" color="primary" />}
        />
        {priceList != null ? (
          <Typography
            variant="caption"
            color="textSecondary"
            className={classes.priceList}
          >
            de $ {priceList}
          </Typography>
        ) : (
          <div className={classes.filler1}></div>
        )}
        <Typography variant="body1" className={classes.price}>
          por $ {price}
        </Typography>
        {item.installments === 0 ? (
          <div className={classes.filler2}></div>
        ) : (
          item.installments.map((item) => (
            <Typography
              key={item.productId}
              variant="caption"
              color="textSecondary"
            >
              o en {item.quantity}x de RS {priceCuota}
            </Typography>
          ))
        )}
        {inHover || width < 600 ? (
          <Button
            size="small"
            className={classes.btn}
            onClick={() => {
              AddToCart(item);
            }}
          >
            Comprar
          </Button>
        ) : (
          ""
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
