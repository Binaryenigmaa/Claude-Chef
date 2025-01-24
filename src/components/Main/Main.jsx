import React, { useState } from "react";
import "./Main.css";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const newIngredient = formData.get("ingredient");
    formElement.reset();
    // pushing into an array directly does not work instead use spread operator and create new array

    setIngredients((item) => [...item, newIngredient]);
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
