import React from "react";
import style from "./FooterStyle";
import Button from "@material-ui/core/Button";

export default function Footer() {
  return (
    <div className="container" style={style.contened}>
      <form style={style.formulario}>
        <div style={style.input} className="form-group">
          <input
            style={style.inputHijo}
            type="email"
            id="exampleInputEmail"
            placeholder="Email please"
          />
          <Button variant="container" color="default" style={style.button}>
            Enviar
          </Button>
        </div>
        <div className="contened">
          <ul style={style.IconList}>
            <li style={style.List}>Productos</li>
            <li style={style.List}>Promociones </li>
            <li style={style.List}>Marcas </li>
            <li style={style.List}>Servicios </li>
            <li style={style.List}>Tienda </li>
            <li style={style.List}>Ayuda </li>
          </ul>
          <ul style={style.contened2}>
            <li style={style.Item}>
              <a style={style.iconos} href="#" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li style={style.Item}>
              <a style={style.iconos} href="#" target="_blank">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li style={style.Item}>
              <a style={style.iconos} href="#" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li style={style.Item}>
              <a style={style.iconos} href="#" target="_blank">
                <i className="fab fa-whatsapp"></i>
              </a>
            </li>
          </ul>
          <div style={style.p}>
            <p>© 1905</p>
          </div>
        </div>
      </form>
    </div>
  );
}
