import c from "../../const/action-const";

export const AddNewRecipe = (
  recipeName,
  recipeInstruction,
  ingredientsArr,
) => ({
  type: c.ADD_NEW_RECIPE,
  recipeName,
  recipeInstruction,
  ingredientsArr,
  id: `${Math.random()}`,
});
