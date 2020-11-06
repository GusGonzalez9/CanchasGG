import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import style from "./singleProductStyle.js";

export default function singleProduct({ product }) {
  console.log(product);
  return (
    <div style={style.everyFather}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit">Home</Link>
        <Link color="inherit">Productos</Link>
        <Typography color="textPrimary">{product.name}</Typography>
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
          <h1 className={style.hola}>{product.name}</h1>
          <h1 style={style.price}>{product.price}</h1>

          {product.off ? (
            <h2 style={style.oferta}>
              ¡OFERTA {product.off}% EN ESTE PRODUCTO!
            </h2>
          ) : null}

          <p style={style.littleDescription}>{product.description}</p>
          <div>
            <p style={style.textCantidad}>Cantidad</p>
            <input style={style.inputCantidad} type="number" /> <br />
            <Button
              variant="contained"
              color="default"
              style={style.buttonColor}
            >
              Agregar al Carrito
            </Button>
            <Button
              variant="contained"
              color="default"
              style={style.buttonColorEdit}
            >
              Editar Producto
            </Button>
            <Button
              variant="contained"
              color="default"
              style={style.buttonColorDelete}
            >
              Eliminar
            </Button>
          </div>
        </div>
      </div>
      <div style={style.commentBox}>
        <span>3 Comentarios</span>
        <hr style={style.hr} />
        <div style={style.userCommentBox}>
          <img
            style={style.avatarComment}
            src="https://avatarfiles.alphacoders.com/126/126912.png"
          />
          <input
            style={style.inputComment}
            placeholder="Inserte comentario..."
            type="text"
          />

          <Button
            variant="contained"
            color="default"
            style={style.commentUserButton}
          >
            Enviar
          </Button>
        </div>
      </div>
      <hr style={style.hr} />
      <div>
        <div style={style.commentsBox}>
          <img
            style={style.avatarComment}
            src="https://avatarfiles.alphacoders.com/126/126912.png"
          />
          <span style={style.commentBoxUser}>UserName :</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem quam molestiae totam voluptates, expedita doloremque.
          </p>
        </div>
        <Button
          variant="contained"
          color="default"
          style={style.buttonColorDelete}
        >
          Eliminar Comentario
        </Button>
        <hr style={style.hr} />
      </div>
    </div>
  );
}
