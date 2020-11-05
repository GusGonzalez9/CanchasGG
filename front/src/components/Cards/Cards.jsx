import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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

export default () => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            /*  image="/static/images/cards/contemplative-reptile.jpg" */
            image="https://bocashop.vteximg.com.br/arquivos/ids/158406-1000-1000/GL417437_0.jpg?v=637369862233700000"
            title="1905 - eCommerce"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Camiseta Boca Jr.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              $7.999.-
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};
