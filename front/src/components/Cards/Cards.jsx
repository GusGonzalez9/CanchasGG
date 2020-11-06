import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 300,
    maxWidth: 285,
    display: "flex",
    justifyContent: "center",
    margin: "10px 10px 10px 10px",
    float: "left",
  },
  media: {
    height: 285,
  },
});

export default ({ productsList }) => {
  console.log("CARD CONTAINER", productsList);
  const classes = useStyles();
  return productsList
    ? productsList.map((producto) => {
        return (
          <Link to={`products/${producto.id}`}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  /*  image="/static/images/cards/contemplative-reptile.jpg" */
                  image={
                    producto.images && producto.images[0]
                      ? producto.images[0].url
                      : "https://www.newcasmont.com/12616-home_default/virulana-escobillon-rincones.jpg"
                  }
                  title="1905 - eCommerce"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {producto.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {producto.price} <br />
                    {producto.off > 0 ? "%" + producto.off : null}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        );
      })
    : null;
};
