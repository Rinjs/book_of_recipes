import React from "react";

import Recipe from "../Recipe";
import "./RecipeList.css";

const RecipesList = () => {
  const recipeArr = [
    {
      dishName: "Dryaniki",
      ingredients: ["Bylba", "yaca", "myka"],
      instruction: "beresh i zharizh"
    },
    {
      dishName: "Makaroni po flotski",
      ingredients: ["Makaroni", "Myaso", "Soys"],
      instruction: "varish makaroni, zharish myaso, meshaesh s soysom , gotovo"
    },
    {
      dishName: "Blini",
      ingredients: ["myka", "yaca", "moloko"],
      instruction: "delaesh testo poto zharish"
    },
  ];
  const recipes = recipeArr.map((item) => <Recipe key={`${item.dishName + Math.random()}`} props={item} />);
  return <ul className="recipes-list">{recipes}</ul>;
};

export default RecipesList;
