import { createStore } from "redux";

import recipeReducer from "../reducers/recipe-reducer";

export default function configureStore() {
  return createStore(recipeReducer);
}
