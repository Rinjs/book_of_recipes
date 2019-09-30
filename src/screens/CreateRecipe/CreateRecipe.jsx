import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CreateRecipe.css";

const CreateRecipe = () => {
  const [inputArr, setNewInput] = useState([
    <input placeholder="1." key={Math.random()} />
  ]);
  const AddNewPlace = () => {
    const arr = [
      ...inputArr,
      <input placeholder={`${inputArr.length + 1}.`} key={Math.random()} />
    ];
    setNewInput(arr);
  };
  return (
    <div className="create-recipe">
      <form action="" className="create-recipe-form">
        <input placeholder="Enter dish name" />
        <div className="create-recipe-form-ingredient-list">
          <p>Enter ingredients:</p>
          {inputArr}
          <button onClick={() => AddNewPlace()} type="button">
            <i className="fas fa-plus"></i> New ingredient
          </button>
        </div>
        <textarea placeholder="Enter how cook this dish" />
      </form>
      <Link to="/">
        <i className="fas fa-backward"></i> back
      </Link>
    </div>
  );
};

export default CreateRecipe;
