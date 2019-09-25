import React from "react";
import Ingredient from "../Ingredient";

const IngredientsList = ({ ingredients }) => {
  const ingredientsArr = ingredients.map(item => (
    <Ingredient key={`${item + Math.random()}`} ingredient={item} />
  ));
  return <ul>{ingredientsArr}</ul>;
};

export default IngredientsList;
