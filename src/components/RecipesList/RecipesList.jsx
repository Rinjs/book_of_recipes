import React from 'react';

import Recipe from '../Recipe';
import './RecipeList.css';

const RecipesList = () => {
  const recipeArr = [];
  recipeArr.push(<Recipe />);
  recipeArr.push(<Recipe />);
  recipeArr.push(<Recipe />);
  recipeArr.push(<Recipe />);
  return <ul className="recipes-list">{recipeArr}</ul>;
};

export default RecipesList;
