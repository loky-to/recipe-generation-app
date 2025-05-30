import { createSlice } from "@reduxjs/toolkit"
import { fetchRecipe } from './recipeThunk'

const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    loading: false,
    recipe: null,
    error: null,
  },
  reducers: {
    setRecipe: (state, action) => {
        if (action.payload) {
           state.recipe = {
                title: action.payload.title,
                ingredients: action.payload.ingredients,
                steps: action.payload.steps,
            }
        } else {
            state.recipe  = action.payload
        }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipe.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.recipe = '';
      })
      .addCase(fetchRecipe.fulfilled, (state, action) => {
        state.loading = false;
        state.recipe = action.payload;
      })
      .addCase(fetchRecipe.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;