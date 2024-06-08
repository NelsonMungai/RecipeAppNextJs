import RecipeList from "@/components/recipe-list";

async function fetchListOfRecipes() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/recipes");
    const result = await apiResponse.json();
    return result?.recipes;
  } catch (e) {
    throw new Error(e);
  }
}
export default async function Recipes() {
  const recipeList = await fetchListOfRecipes();

  return <RecipeList recipeList={recipeList} />;
}
