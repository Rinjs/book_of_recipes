import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateRecipe from "../screens/CreateRecipe";
import RecipesList from "../screens/RecipesList";
import Whoops404 from "../screens/Whoops404";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={RecipesList} />
      <Route exact path="/create-recipe" component={CreateRecipe} />
      <Route component={Whoops404} />
    </Switch>
  </BrowserRouter>
);

export default Router;
