import React from "react";
import RecipesList from '../components/RecipesList';
import recipeContent from './recipe-content';

export const RecipesListPage = () => (
    <>
    <h1>Recipes:</h1>
    <RecipesList recipes={recipeContent} />
    </> 
);