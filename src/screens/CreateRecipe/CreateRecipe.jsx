import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./CreateRecipe.css";
import { connect } from "react-redux";
import { AddNewRecipe } from "../../redux/actions/newrecipe-action";

const CreateRecipe = ({ addNewRecipe }) => {
  const [recipeName, setRecipeName] = useState("");
  const [recipeInstruction, setRecipeInstruction] = useState("");
  const [ingredientsArr, setIngredientsArr] = useState([]);
  const [redirect, setRedirect] = useState(false);

  const [inputArr, setNewInput] = useState([
    <input
      placeholder="1."
      key={Math.random()}
      onChange={event =>
        setIngredientsArr([...ingredientsArr, event.target.value])
      }
    />
  ]);

  const onSubmit = event => {
    event.preventDefault();
    if (!recipeName || !recipeInstruction || !ingredientsArr.length) {
      alert(
        !recipeName
          ? "Please enter a name for the dish"
          : !ingredientsArr.length
          ? "Please enter ingredients"
          : "Please enter a cooking method"
      );
      return false;
    }
    addNewRecipe(recipeName, recipeInstruction, ingredientsArr);
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to="/" />;
  }
  return (
    <div className="create-recipe">
      <form onSubmit={onSubmit} className="create-recipe-form">
        <input
          placeholder="Enter dish name"
          onChange={event => setRecipeName(event.target.value)}
        />
        <div className="create-recipe-form-ingredient-list">
          <p>Enter ingredients:</p>
          {inputArr}
          <button
            onClick={() => {
              if (inputArr.length === ingredientsArr.length) {
                setNewInput([
                  ...inputArr,
                  <input
                    placeholder={`${inputArr.length + 1}.`}
                    key={Math.random()}
                    onChange={event =>
                      setIngredientsArr([...ingredientsArr, event.target.value])
                    }
                  />
                ]);
              }
            }}
            type="button"
          >
            <i className="fas fa-plus"></i> New ingredient
          </button>
        </div>
        <textarea
          placeholder="Enter how to cook this dish"
          onChange={event => setRecipeInstruction(event.target.value)}
        />
        <button>Submit</button>
      </form>
      <Link to="/">
        <i className="fas fa-backward"></i> back
      </Link>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addNewRecipe: (recipeName, recipeInstruction, ingredientsArr) => {
      dispatch(AddNewRecipe(recipeName, recipeInstruction, ingredientsArr));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateRecipe);
