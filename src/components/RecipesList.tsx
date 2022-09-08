import React from "react";
import { Link } from "react-router-dom";

const RecipesList = ({ recipes } : any) => (
  <>
    {recipes.map((recipe: any, key: any) => (
      <Link
        className="recipe-list-item"
        key={key}
        to={`/recipe/${recipe.name}`}
      >
        <h3>{recipe.title} </h3>
        <p>{recipe.content[0].substring(0, 150)}...</p>
      </Link>
    ))}
  </>
);

export default RecipesList;
