import React from "react";

import RecipeHeader from "../RecipeHeader";
import IngredientsList from "../IngredientsList";
import Instruction from "../Instruction";
import "./Recipe.css";

const Recipe = ({
  props: { dishName, ingredients, instruction, id },
  RemoveRecipe
}) => (
  <li className="recipe">
    <button
      className="recipe-delete fas fa-times-circle"
      onClick={() => RemoveRecipe(id)}
    ></button>
    <RecipeHeader dishName={dishName} />
    <IngredientsList ingredients={ingredients} />
    <Instruction instruction={instruction} />
  </li>
);

export default Recipe;
