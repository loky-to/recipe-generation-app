"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addIngredient, removeIngredient } from "../store/ingredientsSlice";
import { fetchRecipe } from "../store/recipeThunk";
import { setRecipe } from "../store/recipeSlice";
import '@/Css/recipe-content.scss'
import BaseButton  from '@/SharedComponentsBaseButton'
import BaseForm  from '@/SharedComponentsBaseForm'
import Loader from '@/shared-components/CookingLoader'

function RecipeContent() {
    const ingredients = useSelector((state) => state.ingredients)
    const recipe = useSelector((state) => state.recipe.recipe)
    const loading = useSelector((state) => state.recipe.loading)
    const dispatch = useDispatch()
    const [newIngredient, setNewIngredient] = useState('')
    const [error, setError] = useState('')

    function handleAddIngredient() {
        const cleanIngredient = newIngredient.trim()
        if(!cleanIngredient) return
        if(ingredients.includes(cleanIngredient)) {
            setError(`${cleanIngredient} is already on the list`)
            setNewIngredient('')
            return
        }
        dispatch(addIngredient(cleanIngredient))
        setNewIngredient('')
        setError('')
    }

    const handleRemove = (ingredient) => {
        dispatch(removeIngredient(ingredient))
        dispatch(setRecipe(null))
    }
    
    const ingredientsListItems = ingredients.map(ingredient => (
        <BaseButton 
            key={ingredient} 
            label={ingredient}
            className="delete-tag"
            onClick={() => handleRemove(ingredient)}    
        />
    ))

    function getRecipe() {
        dispatch(fetchRecipe(ingredients))
        console.log('getting recipe')
    }

    const showRecipe = recipe && recipe.ingredients.length > 0 && recipe.steps.length
    const recipeNotFound = recipe && (recipe.ingredients.legnth === 0 || recipe.steps.length === 0)

    return(
        <main className="recipe-content">
            <BaseForm
                type="text"
                name="ingredient"
                placeholder="e.g oregano"
                ariaLabel="Add ingredient"
                button={{
                    label:"Add ingredient",
                    className:"default",
                }                    }
                onSubmit={handleAddIngredient}
                value={newIngredient}
                onChange={(val) => {
                    setNewIngredient(val)
                    if (error) setError('')
                }}
                errorMessage={error}
            />
            {
                ingredients.length > 0 && 
                <div className="recipe-content__ingredients">
                    <h1>Ingredients on hand</h1>
                    <div className="recipe-content__ingredients-list">
                        { ingredientsListItems }
                    </div>
                </div>
            }
            {
                ingredients.length > 2 && !loading && 
                <div className="recipe-content__get-recipe">
                <div className="recipe-content__get-recipe-lhs">
                    <h2>Ready for a recipe?</h2>
                    <span>Generate a recipe from your list of ingredients.</span>
                </div>
                <BaseButton
                    label="Get a recipe"
                    type="submit"
                    onClick={getRecipe}
                    size="size-38"
                    color="salmon"
                />
                </div>
            }
            {
                showRecipe && !loading &&
                <div className="recipe-content__recipe">
                    <h1>Suggested recipe</h1>
                    <span>Based on your available ingredients, I would recommend making {recipe.title}. Here's the recipe:</span>
                    <div className="recipe-content__recipe-ingredients-list">
                        <h3>Ingredients</h3>
                        <ul>{recipe.ingredients.map(ingredient => (
                            <li key={ingredient}>{ingredient}</li>
                        ))}</ul>
                    </div>
                    <div className="recipe-content__recipe-instructions">
                        <h3>Instructions</h3>
                        <ol>{recipe.steps.map(step => (
                            <li key={step}>{step}</li>
                        ))}</ol>
                    </div>
                </div>
            }
            {
                recipeNotFound && !loading &&
                <div className="recipe-content__recipe-NA">
                    <span>No recipes found. Try updating your ingredients!</span>
                </div>
            }
            {
                loading && 
                <Loader />
            }
        </main>
    )
}

export default RecipeContent;