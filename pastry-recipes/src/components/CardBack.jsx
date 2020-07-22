import React from 'react';
import Scores from './Scores';
import { GiSandsOfTime } from 'react-icons/gi';

const CardBack = ({title, score, difficulty, time}) => {
  return ( 
    <div className="cardBack">
      <h3>{title}</h3>
      <p className="cardBack-text">Puntuación: <Scores number={score} icon="heart"/></p>
      <p className="cardBack-text">Dificultad: <Scores number={difficulty} icon="star"/></p>
      <p className="cardBack-text">Tiempo: {time} <GiSandsOfTime /></p>
    </div>
   );
}
 
export default CardBack;

// - Muestra el nombre de la receta
// - Muestra la puntuacion del 1 al 10, usar el componente Score
// - Muestra la dificultad del 1 al 10, usar el componente Score
// - Muestra el tiempo
// - Muestra el tiempo