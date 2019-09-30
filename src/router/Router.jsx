import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateRecipe from "../screens/CreateRecipe";
import RecipesList from "../screens/RecipesList";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={RecipesList} />
      <Route exact path="/create-recipe" component={CreateRecipe} />
    </Switch>
  </BrowserRouter>
);

export default Router;
