import React, { useState } from "react";
import "./Main.css";
import ClaudeRecipe from "../ClaudeRecipe/ClaudeRecipe";
import IngredientList from "../IngredientList/IngredientList";
import { getRecipeFromMistral } from "../../ClaudeAi.js";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  // TODO Loading functionality
  const [loading, setLoading] = useState(false);
  const [Recipe, setRecipe] = useState("");

  const handleSubmit = (formData) => {
    const newIngredient = formData.get("ingredient");
    // pushing into an array directly does not work instead use spread operator and create new array

    setIngredients((item) => [...item, newIngredient]);
  };

  const getRecipeBtnHandler = async () => {
    // send the ingredients array to clauderecipe.jsx
    const generatedRecipe = await getRecipeFromMistral(ingredients);
    // the response in generatedRecipe is a markdown.
    setRecipe(generatedRecipe);
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
      {Recipe && <ClaudeRecipe ingredients={Recipe} />}
    </main>
  );
};

export default Main;
