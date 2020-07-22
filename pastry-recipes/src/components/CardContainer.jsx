import React from 'react';
import Card from './Card'

const CardContainer = ({recipes}) => {
  console.log(recipes)
  return ( 
    <div className="card-container">
      {
      recipes.map((recipe, index) => <Card recipe={recipe} key={index}/> )
      }
    </div>
  );
}
 
export default CardContainer;