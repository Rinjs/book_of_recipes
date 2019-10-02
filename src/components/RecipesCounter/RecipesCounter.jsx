import React from "react";

import "./RecipesCounter.css";

const RecipesCounter = ({ recipesNumber }) => (
  <div className="recipes-counter">
    <p>
      Now you have {recipesNumber} {recipesNumber === 1 ? "recipe" : "recipes"}
    </p>
  </div>
);

export default RecipesCounter;
