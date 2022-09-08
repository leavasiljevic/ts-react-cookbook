import React from 'react';
import recipeContent from './recipe-content';
import { useParams } from "react-router-dom";
import RecipesList from '../components/RecipesList';
import { NotFoundPage } from './NotFoundPage';

export const RecipePage = () => {
    const parameter = useParams();

    const recipe = recipeContent.find(
        recipe => String(recipe.name) === String(parameter.name));

    if (!recipe) return <NotFoundPage />;
 
    const otherRecipes = recipeContent.filter(
        (recipe) => String(recipe.name) !== String(parameter.name)
    );

    return (
        <>
        <h1>{recipe.title}</h1>
        {recipe.content.map((paragraph, key) => (
            <p key={key}>{paragraph}</p>
        ))}
        <h2>Other Recipes:</h2>
        <RecipesList recipes = {otherRecipes} />
        </>
    );
}

