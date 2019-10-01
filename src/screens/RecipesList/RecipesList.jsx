import React from "react";
import "./RecipeList.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Recipe from "../../components/Recipe";
import { RemoveRecipe } from "../../redux/actions/recipe-action";

const RecipesList = ({ recipes, RemoveRecipe }) => {
  const recipesArr = recipes.map(item => (
    <Recipe
      key={`${item.dishName + Math.random()}`}
      props={item}
      RemoveRecipe={RemoveRecipe}
    />
  ));
  return (
    <ul className="recipes-list">
      {recipesArr}
      <li>
        <Link to="/create-recipe" className="fas fa-plus-circle"></Link>
      </li>
    </ul>
  );
};

const mapStateToProps = state => ({
  recipes: state
});

const mapDispatchToProps = dispatch => {
  return {
    RemoveRecipe: id => {
      dispatch(RemoveRecipe(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesList);
