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

        <Typography
          variant="caption"
          color="textSecondary"
          className={classes.priceList}
        >
          de $ {item.listPrice}
        </Typography>

        <Typography variant="body1" className={classes.price}>
          por $ {item.price}
        </Typography>

        <Typography
          key={item.productId}
          variant="caption"
          color="textSecondary"
        >
          o en {item.cuotas} cuotas de ${item.value}
        </Typography>

        <div>
          {" "}
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
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
