import React from 'react';
import Ingredient from '../Ingredient';

const IngredientsList = () => {
  const recipeArr = [];
  recipeArr.push(<Ingredient />);
  return <ul>{recipeArr}</ul>;
};

export default IngredientsList;
