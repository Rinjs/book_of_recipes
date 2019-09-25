import React from "react";

import "./RecipeHeader.css";

const RecipeHeader = ({ dishName }) => (
  <h3 className="recipe-header">{dishName}</h3>
);

export default RecipeHeader;
