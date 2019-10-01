import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CreateRecipe.css";

const CreateRecipe = () => {
  const [recipeName, setRecipeName] = useState("");
  const [recipeInstruction, setRecipeInstruction] = useState("");
  const [ingredientsArr, setIngredientsArr] = useState([]);

  const [inputArr, setNewInput] = useState([
    <input
      placeholder="1."
      key={Math.random()}
      onChange={event => setIngredientsArr([...ingredientsArr, event.target.value])
      }
    />
  ]);

  return (
    <div className="create-recipe">
      <form action="" className="create-recipe-form">
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

export default CreateRecipe;
