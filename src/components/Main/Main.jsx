import React, { useState } from "react";
import "./Main.css";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients(newIngredient);
    console.log(ingredients);
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="e.g. oregano" name="ingredient" />
        <button type="submit">+ Add ingredient</button>
      </form>
      <div className="Ingredient-list">
        <ul>
          {ingredients.map((ingredient) => {
            return <li>{ingredient}</li>;
          })}
        </ul>
      </div>
    </main>
  );
};

export default Main;
