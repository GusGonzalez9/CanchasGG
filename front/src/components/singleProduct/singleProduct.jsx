import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

import style from "./singleProductStyle.js";

export default function singleProduct({
  product,
  commentChange,
  handleSubmitComment,
  handleImgChange,
  imagenPrincipal,
  contador,
}) {
  return (
    <div style={style.everyFather}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link href="/" color="inherit">
          Home
        </Link>
        <Link href="/" color="inherit">
          Productos
        </Link>
        <Typography color="textPrimary">{product.name}</Typography>
      </Breadcrumbs>
      <div style={style.fatherAllSingleProduct}>
        <div style={style.FatherLittleImg}>
          {product.images &&
            product.images.map((img) => {
              return (
                <img
                  value={`${img.url}`}
                  style={style.littleImg}
                  src={`${img.url}`}
                  onClick={handleImgChange}
                />
              );
            })}
        </div>
        <div>
          {/* IMAGEN PRINCIPAL */}
          {product.images && product.images[0] && !contador ? (
            <img style={style.imgPrincipal} src={product.images[0].url} />
          ) : (
            <img style={style.imgPrincipal} src={imagenPrincipal} />
          )}
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
        <span>Comentarios</span>
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
            onChange={commentChange}
          />

          <Button
            variant="contained"
            color="default"
            style={style.commentUserButton}
            onClick={handleSubmitComment}
          >
            Enviar
          </Button>
        </div>
      </div>
      <hr style={style.hr} />
      {console.log(
        "HOLAAAAAA ESTO SON LOS COMENTARIOS",
        product.comments
      )}
      {product.comments &&
        product.comments.map((comment) => {
          
          return (

            <div>
              <div style={style.commentsBox}>
                <img
                  style={style.avatarComment}
                  src="https://avatarfiles.alphacoders.com/126/126912.png"
                />
                <span style={style.commentBoxUser}>UserName :</span>

                <p>{comment.content}</p>
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


          );
        })}
    </div>
  );
}
