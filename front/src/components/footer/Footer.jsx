import React from "react";
import style from "./FooterStyle";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";

export default function Footer() {
  return (
    <div style={style.contened}>
      <form style={style.formulario}>
        <div style={style.input}>
          <TextField id="standard-basic" label="E-mail" />
          <Button variant="contained" color="default" style={style.button}>
            subscribe
          </Button>
        </div>
        <div>
          <ul style={style.IconList}>
            <li style={style.List}>Productos</li>
            <li style={style.List}>Promociones </li>
            <li style={style.List}>Marcas </li>
            <li style={style.List}>Servicios </li>
            <li style={style.List}>Tienda </li>
            <li style={style.List}>Ayuda </li>
          </ul>
          <ul style={style.contened2}>
            <InstagramIcon color="disabled" />
            <WhatsAppIcon color="disabled" />
            <FacebookIcon color="disabled" />
            <TwitterIcon color="disabled" />
          </ul>
          <div style={style.p}>
            <p>© 2020 Copyright: 1905 e-commerce </p>
          </div>
        </div>
      </form>
    </div>
  );
}
