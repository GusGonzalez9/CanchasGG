import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

import style from "./singleProductStyle";

export default function singleProduct() {
  return (
    <div style={style.everyFather}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit">Home</Link>
        <Link color="inherit">Productos</Link>
        <Typography color="textPrimary">
          NOMBRE DEL PRODUCTO PASADO POR PROPS
        </Typography>
      </Breadcrumbs>

      <div style={style.fatherAllSingleProduct}>
        <div style={style.FatherLittleImg}>
          {/* ACA VA UN MAP PARA TODAS LAS FOTOS DEL PRODUCTO YO RENDERIZO 3 PARA QUE VEAN COMO SE TENDRIAN QUE VER */}
          <img
            style={style.littleImg}
            src="https://gamedustria.com/wp-content/uploads/2015/06/PlayStation_4.png"
          />
          <img
            style={style.littleImg}
            src="https://miro.medium.com/max/3000/1*pMDS1A_zmkE18aE4y2u36Q.png"
          />
          <img
            style={style.littleImg}
            src="https://i1.wp.com/regionps.com/wp-content/uploads/2018/04/image-a.png?resize=700%2C478"
          />
         
         

        </div>

        <div>
          {/* IMAGEN PRINCIPAL */}
          <img
            style={style.imgPrincipal}
            src="https://gamedustria.com/wp-content/uploads/2015/06/PlayStation_4.png"
          />
        </div>

        <div style={style.descriptionFather}>
          {/* DESCRIPCION DEL PRODUCTO */}
          <h1>NOMBRE DEL PRODUCTO PASADO POR PROPS</h1>
          <h1 style={style.price}>$126</h1>
          <h2 style={style.oferta}>¡OFERTA 25% EN ESTE PRODUCTO!</h2>
          <p style={style.littleDescription}>
            Breve descripcion del producto: Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Soluta, earum! amet consectetur
            adipisicing elit. Solut amet consectetur adipisicing elit. Solut
            adipisicing elit. Solut amet consectetur adipisicing elit. Solut
            adipisicing elit. Solut amet consectetur adipisicing elit. Solut
          </p>
          <div>
            <p style={style.textCantidad}>Cantidad</p>
            <input style={style.inputCantidad} type="number" /> <br />
            <Button variant="contained" color="default" style={style.buttonColor}>
              Agregar al Carrito
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
