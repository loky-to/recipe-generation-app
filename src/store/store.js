import { configureStore } from "@reduxjs/toolkit";
import ingredientsReducer from "./ingredientsSlice";
import recipeReducer from "./recipeSlice";

const store = configureStore({
    reducer: {
        ingredients: ingredientsReducer,
        recipe: recipeReducer,
      },
      devTools: process.env.NODE_ENV !== 'production',
});

export default store;
