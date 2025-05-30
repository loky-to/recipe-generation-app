"use client"
import '../css/recipe-generation-page.scss'
import { Provider } from "react-redux"
import store from '../store/store'
import RecipeContent from '@/components/RecipeContent'
import RecipeHeader from '@/components/RecipeHeader'

export default function RecipeGenerationPage() {
  return (
    <Provider className="recipe-generation-page" store={store}>
      <RecipeHeader />
      <RecipeContent />
    </Provider>
  );
}