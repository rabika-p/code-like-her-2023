import Ingredients from "../components/Ingredients";
import Instructions from "../components/Instructions";
import RecipeCard from "../components/RecipeCard";

const RecipeDetail = ({ recipe }) => {
  // Retreive all keys of recipe object and filter on basis of key name and if it is a truthy value
  // then map over filtered keys
  const ingredients = Object.keys(recipe)
    .filter((key) => key.startsWith("strIngredient") && recipe[key])
    .map((key) => recipe[key]);

  return (
    <div>
      {recipe && (
        <>
          <div className="flex mt-2 justify-center">
            <RecipeCard recipe={recipe} isListView={false} />
            <Ingredients ingredients={ingredients} />

          </div>
          <div className="flex justify-center"> 
          <Instructions instructions={recipe.strInstructions} />
          </div>

        </>
      )}
    </div>
  );
};

export default RecipeDetail;
