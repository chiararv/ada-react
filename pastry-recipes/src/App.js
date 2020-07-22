import React from 'react';
import RecipesArr from './api/index'
import CardContainer from './components/CardContainer';

function App() {
  return (
    <div className="container">

      <CardContainer recipes={RecipesArr}/>
    </div>

  );
}

export default App;
