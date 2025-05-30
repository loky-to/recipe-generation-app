import Lottie from "lottie-react";
import cookingAnimation from "@/assets/cooking.json";
import '@/SharedCsscomponents/cooking-loader.scss'

export default function Loader() {
  return (
    <div className="cooking-loader">
      <Lottie animationData={cookingAnimation} loop autoplay className="cooking-loader__loader" />
      <p>Cooking up your recipe...</p>
    </div>
  );
}