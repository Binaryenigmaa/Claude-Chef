import React, { useRef, useState, useEffect } from "react";
import "./Main.css";
import ClaudeRecipe from "../ClaudeRecipe/ClaudeRecipe";
import IngredientList from "../IngredientList/IngredientList";
import { getRecipeFromMistral } from "../../ClaudeAi.js";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  // TODO Loading functionality and dark mode
  const [loading, setLoading] = useState(false);
  const [Recipe, setRecipe] = useState("");

  const recipeSection = useRef(null);

  useEffect(() => {
    if (Recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [Recipe]);

  const getRecipeBtnHandler = async () => {
    const generatedRecipe = await getRecipeFromMistral(ingredients);
    setRecipe(generatedRecipe);
  };

  const handleSubmit = (formData) => {
    const newIngredient = formData.get("ingredient");
    // pushing into an array directly does not work instead use spread operator and create new array

    setIngredients((item) => [...item, newIngredient]);
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
          ref={recipeSection}
          ingredients={ingredients}
          recipeHandler={getRecipeBtnHandler}
        />
      )}
      {Recipe && <ClaudeRecipe recipeReceived={Recipe} />}
    </main>
  );
};

export default Main;
