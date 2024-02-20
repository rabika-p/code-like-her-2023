import { useState, useEffect } from "react";

import api, { endpoints } from "../utils/axios";

import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import Heading from "../components/Heading";
import ButtonComponent from "../components/ButtonComponent";

import RecipeDetail from "./RecipeDetail";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const params = searchQuery ? { s: searchQuery } : {};
    api
      .get(endpoints.list, { params })
      .then((res) => {
        if (res.data.meals) {
          setRecipes(res.data.meals);
        } else {
          setRecipes([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [searchQuery]);

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  const handleView = (recipe) => {
    setSelectedRecipe(recipe);
    setSearchQuery("");
  };

  const handleBack = () => {
    setSelectedRecipe(null);
  };

  return (
    <>
      <Heading text="Recipe finder" isMainHeading={true} />
      {!selectedRecipe && (
        <>
          <SearchBar
            placeholder="Type to find a recipe..."
            onChange={(event) => handleSearch(event.target.value)}
          />
          {loading ? (
            <Heading text="Loading recipes..." isMainHeading={false} />
          ) : recipes.length > 0 ? (
            <div className="flex flex-wrap justify-around gap-6">
              {recipes.map((recipe, index) => (
                <RecipeCard
                  key={index}
                  recipe={recipe}
                  onView={handleView}
                  isListView={true}
                />
              ))}
            </div>
          ) : (
            <Heading text="No recipes found" isMainHeading={false} />
          )}
        </>
      )}
      {selectedRecipe && (
        <>
          <div className="flex justify-end w-[88vw]">
            <ButtonComponent
              onClick={handleBack}
              buttonText="Back to Recipes"
            ></ButtonComponent>
          </div>

          <RecipeDetail recipe={selectedRecipe} />
        </>
      )}
    </>
  );
};

export default RecipeList;
