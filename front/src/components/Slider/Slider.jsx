import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";

class Slider extends React.Component {
  constructor(props) {
    super(props);
  }

  Item(item) {
    return (
      <Paper>
        <img
          className="img-slider"
          width="100%"
          height="380"
          src={item.url}
        ></img>
      </Paper>
    );
  }

  render() {
    var items = [
      {
        url:
          "https://www.bocashop.com.ar/arquivos/3RA-Adidas_Banner-Desktop.jpg?v=637369264433430000",
      },
      {
        url:
          "https://www.bocashop.com.ar/arquivos/slider-desk-1280x283-02.jpg?v=637390647302970000",
      },
    ];
    return (
      <Carousel>
        {items.map((item, i) => (
          <div key={i}>{this.Item(item)}</div>
        ))}
      </Carousel>
    );
  }
}

export default Slider;
