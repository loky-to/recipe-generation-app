import { createSlice } from "@reduxjs/toolkit";

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState: [],
  reducers: {
    addIngredient: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    removeIngredient: (state, action) => {
        return state.filter(ingredient => ingredient !== action.payload);
    },
  },
});

export const { addIngredient, removeIngredient } = ingredientsSlice.actions;
export default ingredientsSlice.reducer;