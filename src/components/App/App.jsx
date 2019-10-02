import React from "react";

import { connect } from "react-redux";
import Router from "../../router";
import "./App.css";
import RecipesCounter from "../RecipesCounter";

const App = ({ recipes }) => (
  <div className="App">
    <RecipesCounter recipesNumber={recipes.length} />
    <Router />
  </div>
);

const mapStateToProps = state => ({
  recipes: state,
});

export default connect(mapStateToProps)(App);
