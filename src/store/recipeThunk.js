import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = '/api/recipe';

export const fetchRecipe = createAsyncThunk(
    'recipe/fetchRecipe',
    async (ingredientsText, thunkAPI) => {
        const inputs = Array.isArray(ingredientsText)
          ? ingredientsText.join(', ')
          : ingredientsText;
    
        try {
          const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ inputs }),
          });
    
          if (!response.ok) {
            const error = await response.json();
            return thunkAPI.rejectWithValue(error.error);
          }
    
          const data = await response.json();
          return data;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
        }
      }
    );