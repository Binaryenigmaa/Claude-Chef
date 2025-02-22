import React from "react";

const IngredientList = (props) => {
  return (
    <section className="Ingredient-list-section">
      <h2>Ingredients on hand: </h2>
      <ul>
        {props.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      {props.ingredients.length > 3 && (
        <div className="get-recipes-container" ref={props.ref}>
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients</p>
          </div>
          <button onClick={props.recipeHandler}>Get a recipe</button>
        </div>
      )}
    </section>
  );
};

export default IngredientList;
