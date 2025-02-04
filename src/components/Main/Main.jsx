import React, { useState } from "react";
import "./Main.css";
import ClaudeRecipe from "../ClaudeRecipe/ClaudeRecipe";
import IngredientList from "../IngredientList/IngredientList";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recipeShown, setRecipeShown] = useState(false);

  const handleSubmit = (formData) => {
    const newIngredient = formData.get("ingredient");
    // pushing into an array directly does not work instead use spread operator and create new array

    setIngredients((item) => [...item, newIngredient]);
  };

  const getRecipeBtnHandler = (e) => {
    setRecipeShown((prev) => !prev);
  };

  return (
    <main>
      <form action={handleSubmit}>
        <input
          type="text"
          placeholder="e.g. oregano"
          name="ingredient"
          required
        />
        <button type="submit" className="form-btn">
          + Add ingredient
        </button>
      </form>
      {ingredients.length > 0 && (
        <IngredientList
          ingredients={ingredients}
          recipeHandler={getRecipeBtnHandler}
        />
      )}
      {recipeShown && <ClaudeRecipe />}
    </main>
  );
};

export default Main;
