import React from "react";

import RecipeHeader from "../RecipeHeader";
import IngredientsList from "../IngredientsList";
import Instruction from "../Instruction";
import "./Recipe.css";

const Recipe = ({ props: { dishName, ingredients, instruction } }) => (
  <li className="recipe">
    <RecipeHeader dishName={dishName} />
    <IngredientsList ingredients={ingredients} />
    <Instruction instruction={instruction} />
  </li>
);

export default Recipe;
