async function fetchRecipeDetails(currentRecipeId){
    try{
        const apiResponse=await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`)
        const result=await apiResponse.json()
        return result
    }catch(error){
        throw new Error(error)
    }
}
export default async function RecipeDetails({params}) {
    const getRecipeDetails= await fetchRecipeDetails(params?.details)
    return (
        <div>
            <h1 className="text-3xl font-bold">RecipeDetails page</h1>
        </div>
    );
}
