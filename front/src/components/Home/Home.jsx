import React from "react";
import SliderContainer from '../Slider/SliderContainer'
import CardsContainer from '../Cards/CardsContainer'
import style from '../../styles/style.css'

export default function Home() {
  return (
    <div>
      <SliderContainer />
      <h1 className={style.h1}>
        Productos <span>destacados</span>
      </h1>
      <CardsContainer />
      {/* cards */}
      <h1 className={style.h1}>
        Productos en <span>oferta</span>
      </h1>
      <CardsContainer />
    </div>
  );
}
