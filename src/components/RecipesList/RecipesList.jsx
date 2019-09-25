import React from 'react';

import Recipe from '../Recipe';

const RecipesList = () => {
  const recipeArr = [];
  recipeArr.push(<Recipe />);
  return <ul className="recipesList">{recipeArr}</ul>;
};

export default RecipesList;
