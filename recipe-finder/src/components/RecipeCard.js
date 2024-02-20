import { Card } from "@mui/material";

import ButtonComponent from "./ButtonComponent";
import RecipeInfo from "./RecipeInfo";
import RecipeImage from "./RecipeImage";

const RecipeCard = ({ recipe, onView, isListView }) => {
  const handleView = () => {
    onView(recipe);
  };

  const cardWidth = isListView ? "w-96" : "w-2/4";
  const cardVariant = isListView ? "elevation" : "outlined";

  return (
      <Card variant= {cardVariant} className={`font-extrabold ${cardWidth}`}>
        <RecipeImage imageUrl={recipe.strMealThumb} altText={recipe.strMeal} />
        <RecipeInfo
          name={recipe.strMeal}
          category={recipe.strCategory}
          area={recipe.strArea}
        />
        {isListView && (
          <ButtonComponent onClick={handleView} buttonText="View" />
        )}
      </Card>
  );
};

export default RecipeCard;
