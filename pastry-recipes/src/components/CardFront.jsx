import React from 'react';

const CardFront = ({img, newRecipe, noSugar}) => {
  return ( 
      <div className="cardFront" style={{ backgroundImage:`url(${img})`}}>
        {newRecipe && <span className="tag new-recipe">Nuevo</span> }
        {noSugar && <span className="tag no-sugar">Sin azúcar</span> }
      </div>
   );
}
 
export default CardFront;