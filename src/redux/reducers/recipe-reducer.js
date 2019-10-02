import c from "../../const/action-const";
import initialState from "./initial-state";

export default function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case c.REMOVE_RECIPE: {
      return state.filter(item => item.id !== action.id);
    }
    case c.ADD_NEW_RECIPE: {
      const recipe = {
        dishName: action.recipeName,
        ingredients: action.ingredientsArr,
        instruction: action.recipeInstruction,
        id: action.id
      };
      return [...state, recipe];
    }
    default:
      return state;
  }
}
